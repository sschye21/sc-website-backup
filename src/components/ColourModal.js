import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

const setColour = (c1, c2, c3) => {
    localStorage.setItem('colour1', c1)
    localStorage.setItem('colour2', c2)
    localStorage.setItem('colour3', c3)
}

function ColourModal () {

    const [open, setOpen] = React.useState(true)
    const cancelButtonRef = React.useRef(null)
    const navigate = useNavigate()

    const c1 = localStorage.getItem('colour1')
    const c2 = localStorage.getItem('colour2')
    const c3 = localStorage.getItem('colour3')
    
    if (c1 === null || c2 === null || c3 === null) {
        localStorage.setItem('colour1', '#230078')
        localStorage.setItem('colour2', '#FDF3E5')
        localStorage.setItem('colour3', '#8CB41E')
    }

    if (!open) {
        navigate('/home')
    }

    return (
        <Transition.Root show={open} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
            <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
                </span>
                <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                <Dialog.Panel className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-black-900 text-center" style={{paddingTop: 30}}>
                            Choose your colour scheme!
                        </Dialog.Title>

                    <div className="px-4 py-10 sm:px-6 sm:flex sm:flex-column sm:center">
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <button
                                type="button"
                                style={{gap: 10}}
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-200 text-base font-medium text-black hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => {
                                    setOpen(false)
                                    setColour('#230078', '#FDF3E5', '#8CB41E')
                                    navigate('/home')
                                }}
                            >
                                <div className="flex flex-col justify-center text-white rounded-md w-32 h-24" style={{backgroundColor: '#230078'}}>#230078</div>
                                <div className="flex flex-col justify-center text-black rounded-md w-32 h-24" style={{backgroundColor: '#FDF3E5'}}>#FDF3E5</div>
                                <div className="flex flex-col justify-center text-white rounded-md w-32 h-24" style={{backgroundColor: '#8CB41E'}}>#8CB41E</div>
                            </button>
                            <br />
                            <button
                                type="button"
                                style={{gap: 10}}
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-200 text-base font-medium text-black hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => {
                                    setOpen(false)
                                    setColour('#9381ff', '#ffeedd', '#b8b8ff')
                                    navigate('/home')
                                }}
                            >
                                <div className="flex flex-col justify-center text-white rounded-md w-32 h-24" style={{backgroundColor: '#9381ff'}}>#9381ff</div>
                                <div className="flex flex-col justify-center text-black rounded-md w-32 h-24" style={{backgroundColor: '#ffeedd'}}>#FFEEDD</div>
                                <div className="flex flex-col justify-center text-white rounded-md w-32 h-24" style={{backgroundColor: '#b8b8ff'}}>#B8B8FF</div>
                            </button>
                            <br />
                            <button
                                type="button"
                                style={{gap: 10}}
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-200 text-base font-medium text-black hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => {
                                    setOpen(false)
                                    setColour('#D4A373', '#faedcd', '#606c38')
                                    navigate('/home')
                                }}
                            >
                                <div className="flex flex-col justify-center text-white rounded-md w-32 h-24" style={{backgroundColor: '#D4A373'}}>#D4A373</div>
                                <div className="flex flex-col justify-center text-black rounded-md w-32 h-24" style={{backgroundColor: '#faedcd'}}>#FAEDCD</div>
                                <div className="flex flex-col justify-center text-white rounded-md w-32 h-24" style={{backgroundColor: '#606c38'}}>#606C38</div>
                            </button>
                        </div>
                        
                    </div>
                </Dialog.Panel>
                </Transition.Child>
            </div>
            </div>
        </Dialog>
        </Transition.Root>
    )
}

export default ColourModal;
