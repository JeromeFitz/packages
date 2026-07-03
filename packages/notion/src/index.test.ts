import { beforeEach, describe, expect, it, vi } from "vitest";

const { retrieveMock, queryMock } = vi.hoisted(() => ({
  retrieveMock: vi.fn<(args: { database_id: string }) => Promise<unknown>>(),
  queryMock: vi.fn<(args: Record<string, unknown>) => Promise<unknown>>(),
}));

vi.mock("@notionhq/client", () => ({
  Client: vi.fn<() => unknown>(function MockClient() {
    return {
      blocks: { children: { list: vi.fn<() => Promise<unknown>>() } },
      databases: { retrieve: retrieveMock },
      dataSources: { query: queryMock },
      pages: { retrieve: vi.fn<() => Promise<unknown>>() },
    };
  }),
}));

const { Client } = await import("./index.js");

describe("Client custom.getDatabasesByIdQuery", () => {
  beforeEach(() => {
    retrieveMock.mockReset();
    queryMock.mockReset();
  });

  it("resolves the data source before querying", async () => {
    retrieveMock.mockResolvedValue({ data_sources: [{ id: "ds_1", name: "Pages" }] });
    queryMock.mockResolvedValue({ has_more: false, next_cursor: null, results: [] });

    const client = new Client({ auth: "token" });
    await client.custom.getDatabasesByIdQuery({ database_id: "db_1" });

    expect(retrieveMock).toHaveBeenCalledWith({ database_id: "db_1" });
    expect(queryMock).toHaveBeenCalledWith(expect.objectContaining({ data_source_id: "ds_1" }));
  });

  it("returns an empty array without querying when database_id is falsy", async () => {
    const client = new Client({ auth: "token" });
    const result = await client.custom.getDatabasesByIdQuery({ database_id: undefined });

    expect(result).toEqual([]);
    expect(retrieveMock).not.toHaveBeenCalled();
    expect(queryMock).not.toHaveBeenCalled();
  });

  it("throws when the database has no data sources", async () => {
    retrieveMock.mockResolvedValue({ data_sources: [] });
    const client = new Client({ auth: "token" });

    await expect(client.custom.getDatabasesByIdQuery({ database_id: "db_1" })).rejects.toThrow(
      "No data source found for Notion database db_1",
    );
    expect(queryMock).not.toHaveBeenCalled();
  });

  it("throws when the response is a partial database object", async () => {
    retrieveMock.mockResolvedValue({ id: "db_1", object: "database" });
    const client = new Client({ auth: "token" });

    await expect(client.custom.getDatabasesByIdQuery({ database_id: "db_1" })).rejects.toThrow(
      "No data source found for Notion database db_1",
    );
  });
});

describe("Client custom.getQuery", () => {
  beforeEach(() => {
    retrieveMock.mockReset();
    queryMock.mockReset();
  });

  it("resolves the data source and queries it for the EPISODES route", async () => {
    retrieveMock.mockResolvedValue({ data_sources: [{ id: "ds_episodes", name: "Episodes" }] });
    queryMock.mockResolvedValue({ results: [] });

    const client = new Client({
      auth: "token",
      config: { NOTION: { EPISODES: { database_id: "db_episodes" } } },
    });

    await client.custom.getQuery({
      reqQuery: { databaseType: "EPISODES", podcasts: "podcast-1,podcast-2" },
    });

    expect(retrieveMock).toHaveBeenCalledWith({ database_id: "db_episodes" });
    expect(queryMock).toHaveBeenCalledWith(
      expect.objectContaining({ data_source_id: "ds_episodes" }),
    );
  });
});
