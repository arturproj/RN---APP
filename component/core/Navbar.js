import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import StyledGlobal from '../../global.conf'
import { Header, Icon, } from 'react-native-elements'
class Navbar extends React.Component {
    constructor(state) {
        super(state)
        this.Center = this.Center.bind(this)
        this.Left = this.Left.bind(this)
        this.Right = this.Right.bind(this)
        this.actionRightNav = this.actionRightNav.bind(this)
    }
    actionLeftNav() {
        console.log('NavbarComponents.Left')

    }

    actionRightNav() {
        console.log('NavbarComponents.Right')
        this.props.actionRigth("associations")
    }

    Left() {
        return (
            <Icon
                name='menu'
                color={StyledGlobal.header.color}
                onPress={this.actionLeftNav}
            />
        )
    }
    Center() {
        return (
            <Text style={{ color: StyledGlobal.header.color, fontWeight: StyledGlobal.header.fontWeight }}>{this.props.title}</Text>
        )
    }
    Right() {
        return (
            <Icon
                name='home'
                color={StyledGlobal.header.color}
                onPress={this.actionRightNav}
            />
        )
    }
    render() {
        return (
            <View style={StyledGlobal.header}>
                <Header
                    statusBarProps={( this.props.bgnav !== undefined ? {barStyle: 'dark'} : {barStyle: 'light'} )}
                    placement="center"
                    leftComponent={this.Left}
                    centerComponent={this.Center}
                    rightComponent={this.Right}
                    containerStyle={{ 
                        backgroundColor: ( this.props.bgnav !== undefined ? this.props.bgnav : StyledGlobal.header.backgroundColor ), 
                        justifyContent: StyledGlobal.header.justifyContent }}
                />
            </View>
        )
    }
}
export default Navbar;