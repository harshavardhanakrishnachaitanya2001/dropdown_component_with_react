import {useState} from 'react'

type NewItemModalProps = {
    isOpen:boolean,
    onClose:() => void
}

const NewItemModal:React.FC<NewItemModalProps> = ({isOpen, onClose}) => {
    const [newItem,setNewItem] = useState({
        id:'',
        name:""
    })
  return (
    <div className='z-10'>
        <form>
            <div>
                <label>Item</label>
                <input className='border-2 text-md font-semibold ' />
            </div>
        </form>
    </div>
  )
}

export default NewItemModal