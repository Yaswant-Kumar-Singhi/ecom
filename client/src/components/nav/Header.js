import React,{useState} from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, UserAddOutlined, UserOutlined} from '@ant-design/icons';


const { SubMenu , Item } = Menu; //Menu.submenu

const Header = () => {
    //creating state and function to update the state
    const [current, setCurrent] = useState('home');

    const handleClick = (e) =>{
        setCurrent(e.key)
    }

    return(

        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">

            <Item key="home" icon={<AppstoreOutlined />}>
                Home
            </Item>

            <Item key="register" icon={<UserAddOutlined />} style={{float:"right"}} >
                Register
            </Item>

            <Item key="login" icon={<UserOutlined />} style={{float:"right"}}>
                Login
            </Item>

            


            <SubMenu key="user" icon={<SettingOutlined />} title="Usernmae">
                    <Item key="setting:1">Login</Item>
                    <Item key="setting:2">Register 2</Item>
          </SubMenu>
        
      </Menu> 

    );
};

export default Header;