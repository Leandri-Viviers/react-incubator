import PropTypes from 'prop-types'
// Components
import {
  List,
  ListItem,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const TodoList = ({ items, hideCompleted, deleteHandler, toggleHandler }) => {
  return (
    <List>
      {items.map((item, index) => {
        const labelId = `checkbox-list-label-${index}`
        return hideCompleted && item.completed ? null : (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton
                edge="end"
                size="small"
                onClick={() => deleteHandler(index)}
                aria-label="delete event"
              >
                <CloseIcon />
              </IconButton>
            }
            disablePadding
            divider
          >
            <ListItemButton
              role={undefined}
              onClick={() => toggleHandler(index)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={item.name}
                sx={item.completed ? { textDecoration: 'line-through' } : null}
              />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  hideCompleted: PropTypes.bool.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  toggleHandler: PropTypes.func.isRequired,
}

export default TodoList
