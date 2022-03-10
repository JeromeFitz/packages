import { useKBar } from 'kbar'

import { Badge, Box } from '../index'

const KBarSubscriptions = () => {
  const kbar = useKBar((state) => state)

  return (
    <Box css={{ pb: '$4' }}>
      <Badge
        size="1"
        css={{ cursor: 'pointer', fontFamily: '$mono', px: '$2' }}
        onClick={() => {
          void kbar.query.setCurrentRootAction(null)
        }}
      >
        Menu
      </Badge>
      {!!kbar?.currentRootActionId && (
        <Badge
          size="1"
          css={{ cursor: 'pointer', fontFamily: '$mono', ml: '$2', px: '$2' }}
          onClick={() => {
            void kbar.query.setCurrentRootAction(
              kbar.actions[kbar?.currentRootActionId].id
            )
          }}
        >
          {kbar.actions[kbar?.currentRootActionId].name}
        </Badge>
      )}
    </Box>
  )
}

export { KBarSubscriptions }
