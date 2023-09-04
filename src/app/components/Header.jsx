import { AiFillHome } from 'react-icons/ai'
import MenuItem from './MenuItem'

export default function Header(){
    return(
        <div>
            <div className="" >
                <MenuItem title="HOME" address="/" Icon={AiFillHome} />
            </div>
            <div className="" ></div>
            {/* <div className="" ></div>
            <div className="" ></div> */}
            
        </div>
    )
}