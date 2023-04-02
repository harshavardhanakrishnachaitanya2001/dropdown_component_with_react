import React, { useState } from 'react'
import NewItemModal from './NewItemModal'

interface ListItem {
  id: number;
  name: string;
}

const Dropdown = () => {
  const [isModalOPen, setIsModalOPen] = useState(false)

  const openModal = () => {
    setIsModalOPen(true);
  }

  const closeModal = () => {
    setIsModalOPen(false)
  }
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const items: ListItem[] = [
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    {id:3, name:"item 3"},
    {id:4, name:"item 4"}
  ];

  return (
    
    <div className="w-60 mx-auto">
      <button onClick = {openModal} className="p-2 rounded-lg border text-xl font-semibold bg-blue-500 hover:bg-blue-400">Add new Item</button>
      <p className="text-2xl font-medium cursor-pointer" onClick={toggleDropdown}>
        {isDropdownOpen ? "Close" : "Click here"}
      </p>
      
      {isDropdownOpen && (
        <div className=' gap-y-2'>
          <ul className="border-l-2 ml-[100px] divide-gray-400">
            {items.map((item) => (
              <li key={item.id} className="py-2 border-b w-auto px-3 hover:bg-gray-300">
                {item.name}
              </li>
            ))}
          </ul>
          <NewItemModal isOpen={isModalOPen} onClose = {closeModal}/>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
