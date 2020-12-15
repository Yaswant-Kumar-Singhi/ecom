import React,{useState} from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu; //Menu.submenu

const Header = () => {
    //creating state and function to update the state
    const [current, setCurrent] = useState('');

    const handleClick = () =>{

    }

    return(

        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined />}>
                Home
            </Menu.Item>

            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Register">
                    <Menu.Item key="setting:1">Login</Menu.Item>
                    <Menu.Item key="setting:2">Register 2</Menu.Item>
          </SubMenu>
        
      </Menu> 

    );
};

export default Header;