import commitTypes from "../../data/types.ts";
import { formatCliTypes } from "../../utils/index.ts";

const list = () => formatCliTypes(commitTypes);

export default list;
