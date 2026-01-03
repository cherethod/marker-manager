import './header.css';
import { IconChevronLeft, IconChevronRight, IconSearch } from '@tabler/icons-react';
export function Header() {
    return (
          <header>
            <div className="logo">
                <IconChevronLeft stroke={2} color='#2060df'/>
                <IconChevronRight stroke={2} color='#2060df'/>
                <h1>Marker Manager</h1>
            </div>
            <div className='header-search'>
                <IconSearch stroke={2} color='#b0b0b0'/>
                <input type="text" placeholder='Search...' />
            </div>
            <div className='header-buttons'>Buttons</div>
     </header>
    )
}