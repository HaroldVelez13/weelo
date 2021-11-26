import { useEffect, useState } from 'react';


const useAlert = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('isOpen', "isOpen");
  }

  useEffect(()=>{
    const is_open:boolean = localStorage.getItem("isOpen")?false:true;
    setIsOpen(is_open)
  },[])

  return {
      isOpen,
      handleClose
    };
};

export default useAlert;