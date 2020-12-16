import React,{useState} from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, UserAddOutlined, UserOutlined , LogoutOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import {useDispatch , useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';


const { SubMenu , Item } = Menu; //Menu.submenu

const Header = () => {
    //creating state and function to update the state
    const [current, setCurrent] = useState('home');
    let dispatch = useDispatch()
    let history = useHistory()

    const handleClick = (e) =>{
        setCurrent(e.key)
    }

    const logout = () => {
        firebase.auth().signOut();
        dispatch({
            type : "LOGOUT",
            payload : null
        })
        toast.info(`Successfully Logged Out.`)
        history.push("/login")
    }

    return(

        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">

            <Item key="home" icon={<AppstoreOutlined />}>
                <Link to="/"> Home </Link>
            </Item>

            <Item key="register" icon={<UserAddOutlined />} className = "float-right" >
                <Link to="/register"> Register </Link>
            </Item>

            <Item key="login" icon={<UserOutlined />} className = "float-right">
                <Link to="/login"> Login </Link>
            </Item>

            


            <SubMenu key="user" icon={<SettingOutlined />} title="Usernmae">
                    <Item key="setting:1">Login</Item>
                    <Item key="setting:2">Register 2</Item>
                    <Item icon={<LogoutOutlined />} onClick={logout}>Logout</Item>
          </SubMenu>
        
      </Menu> 

    );
};

export default Header;