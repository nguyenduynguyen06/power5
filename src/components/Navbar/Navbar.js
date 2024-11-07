import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import { Dropdown, Menu } from 'antd';

function Navbar() {
    const { t, i18n } = useTranslation();
    const [expandedMenu, setExpandedMenu] = useState(null);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [selectedSubmenu, setSelectedSubmenu] = useState('');
    const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);
    const [expandedSubmenu, setExpandedSubmenu] = useState(null);
    const [activeSubmenuItem, setActiveSubmenuItem] = useState(null);
    
    const toggleMobileSidebar = () => {
        setMobileSidebarVisible(!mobileSidebarVisible);
    };

    const handleSubmenuItemClick = (item) => {
        setSelectedSubmenu(item);
        setActiveSubmenuItem(activeSubmenuItem === item ? null : item);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            const parsedLanguage = JSON.parse(savedLanguage);
            i18n.changeLanguage(parsedLanguage.name === 'English' ? 'en' : 'vi');
            setCurrentLanguage(parsedLanguage);
        }
    }, [i18n]);

    const [currentLanguage, setCurrentLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage
            ? JSON.parse(savedLanguage)
            : {
                name: 'English',
                flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
            };
    });

    const languageMenu = (
        <Menu>
            <Menu.Item key="en" onClick={() => changeLanguage('en')}>
                <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="English" style={{ width: '20px', marginRight: '8px' }} />
                English
            </Menu.Item>
            <Menu.Item key="vi" onClick={() => changeLanguage('vi')}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="Tiếng Việt" style={{ width: '20px', marginRight: '8px' }} />
                Tiếng Việt
            </Menu.Item>
        </Menu>
    );

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        const newLanguage = lng === 'en'
            ? {
                name: 'English',
                flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
            }
            : {
                name: 'Tiếng Việt',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg',
            };
        setCurrentLanguage(newLanguage);
        localStorage.setItem('language', JSON.stringify(newLanguage));
    };

    const submenuItems = {
        industries: ['Information Technology', 'Banking', 'Education', 'Healthcare'],
        services: ['Consulting', 'Support', 'Development', 'Training'],
        details: ['Overview', 'Specifications', 'Pricing'],
        about: ['Company', 'Team', 'Careers', 'Contact'],
    };

    const toggleMenu = (menu) => {
        if (expandedMenu === menu) {
            setExpandedMenu(null);
            setSidebarVisible(false);
        } else {
            setExpandedMenu(menu);
            setSidebarVisible(true);
            setSelectedSubmenu(submenuItems[menu][0]);
        }
    };

    const toggleSubmenu = (menu) => {
        setExpandedSubmenu(expandedSubmenu === menu ? null : menu);
    };

    const renderSidebarContent = () => {
        return <p>{t(`content.${selectedSubmenu}`)}</p>;
    };

    return (
        <div className='container-navbar'>
            <div className="navbar">
                <a href='/'className="navbar-logo">
                    <img src="./logo.png" alt="Logo" className="logo" />
                </a>

                <div className="navbar-links">
                    {Object.keys(submenuItems).map((menu) => (
                        <div
                            key={menu}
                            onClick={() => toggleMenu(menu)}
                            className={`navbar-links-items ${expandedMenu === menu ? 'active' : ''}`}
                        >
                            {t(`navbar.${menu}`)}
                            <span className={`icon ${expandedMenu === menu ? 'rotate' : ''}`}>▼</span>
                        </div>
                    ))}
                </div>
                <div className="navbar-controls">
                    <Dropdown overlay={languageMenu}>
                        <div style={{ cursor: 'pointer' }} className="navbar-language">
                            <img
                                src={currentLanguage.flag}
                                alt={currentLanguage.name}
                                style={{ width: '20px', marginRight: '8px' }}
                            />
                            {currentLanguage.name} <span style={{ paddingLeft: '5px' }}>▼</span>
                        </div>
                    </Dropdown>
                    <div className="hamburger" onClick={toggleMobileSidebar}>
                        ☰
                    </div>
                </div>
            </div>
            {sidebarVisible && (
                <div className={`sidebar show`}>
                    <div className="sidebar-content">
                        <div className="sidebar-left">
                            {submenuItems[expandedMenu].map((item) => (
                                <div
                                    key={item}
                                    className={`submenu-item ${selectedSubmenu === item ? 'active' : ''}`}
                                    onClick={() => setSelectedSubmenu(item)}
                                >
                                    {t(`submenu.${item}`)}
                                </div>
                            ))}
                        </div>
                        <div className="sidebar-right">
                            <div className="content-item">
                                <strong>{t(`submenu.${selectedSubmenu}`)}</strong>
                                {renderSidebarContent()}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className={`mobile-sidebar ${mobileSidebarVisible ? 'show' : ''}`}>
                <div style={{ color: "black", justifyContent: 'space-between', display: 'flex', alignContent: 'center', fontSize: '28px', fontWeight: 'bold' }} onClick={toggleMobileSidebar}>
                    <div className="navbar-logo">
                        <img src="./logo.png" alt="Logo" className="logo" />
                    </div>
                    X
                </div>
                <div className="navbar-links-mobile">
                    {Object.keys(submenuItems).map((menu) => (
                        <div key={menu}>
                            <div
                                className={`navbar-links-items ${expandedSubmenu === menu ? 'active' : ''}`}
                                onClick={() => toggleSubmenu(menu)}
                            >
                                {t(`navbar.${menu}`)}
                                <span className="expand-icon">▼</span>
                            </div>
                            {expandedSubmenu === menu && (
                                <div>
                                    {submenuItems[menu].map((item, index) => (
                                        <div key={index}>
                                            <div
                                                className={`submenu-item-content ${activeSubmenuItem === item ? 'active' : ''}`}
                                                onClick={() => handleSubmenuItemClick(item)}
                                            >
                                                {t(`submenu.${item}`)}
                                            </div>
                                            {activeSubmenuItem === item && (
                                                <div className="mobile-content-item active">
                                                    {renderSidebarContent()}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
