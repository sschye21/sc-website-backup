import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React from 'react'
import navLogo from '../assets/SC.png'
import { HashLink } from 'react-router-hash-link';
import '../App.css'

const navigation = [
  { name: 'Home', href: '/home', current: true, scroll: '' },
  { name: 'About', href: '#about', current: false, scroll: '#about' },
  { name: 'Projects', href: '#projects', current: false, scroll: '#projects' },
  { name: 'Contact', href: '#contact', current: false, scroll: '#contact'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function NavBar() {

    const c1 = localStorage.getItem('colour1')

    return (
        <>
        {/* Navbar */}
        <Disclosure as="nav" style={{backgroundColor: c1}}>
        {({ open }) => (
            <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button for phone --- */}
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        {open ? (
                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    {/* Laptop view for logo */}
                    <a href='/'>
                        <img
                            className="hidden lg:block md:block h-14 w-auto"
                            src={navLogo}
                            alt="Steven-Chye-Logo"
                        />
                    </a>
                    
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
                        <div className="flex-shrink-0">
                            {/* Mobile/tablet view for logo */}
                            <a href='/'>
                                <img
                                    className="block lg:hidden md:hidden h-14 w-auto"
                                    src={navLogo}
                                    alt="Steven-Chye-Logo"
                                />
                            </a>
                        </div>
                        <div className="hidden sm:flex sm:ml-60 items-center">
                            <div className="flex space-x-5">
                                {navigation.map((item) => (
                                    <HashLink smooth to={item.scroll}>
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'px-3 py-2 rounded-md text-sm font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    </HashLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/** Mobile view panel */}
            <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                    <HashLink smooth to={item.scroll}>
                        <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block px-3 py-2 rounded-md text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </Disclosure.Button>
                    </HashLink>
                ))}
                </div>
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
        </>
    )
}

export default NavBar;
