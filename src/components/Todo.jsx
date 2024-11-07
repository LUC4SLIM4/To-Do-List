import styles from './Todo.module.css'
import { Circle, CheckCircle, Trash } from '@phosphor-icons/react'

export function Todo({todo, onDelete, onToggle}) {
    function handleDeleteTodos() {
        onDelete(todo)
    }

    function handleToggleTask() {
        onToggle(todo.id)
    }
    
    return( 
        <div className={`${styles.todoContainer} ${todo.isCompleted ? styles.completed : ''}`}>
            <button 
                onClick={handleToggleTask} 
                type="button"
            >
                {todo.isCompleted ? (
                    <CheckCircle size={24} weight="fill" className={styles.checkCircle} />
                ) : (
                    <Circle size={24} className={styles.circle} />
                )}
            </button>
            <p>{todo.content}</p>
            <button 
                onClick={handleDeleteTodos}
                type="button"
            >
                <Trash size={24} />
            </button>
        </div>
    )
}