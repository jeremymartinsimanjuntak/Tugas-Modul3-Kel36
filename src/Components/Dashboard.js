import { Component } from "react";
import React from "react";
import Id from "./Id";
import Misc from "./Misc";
import Logo from "./food.png";

class Dashboard extends Component {
    componentDidMount() {
        alert('Selamat Datang di Program!!!')
    }

    state = {
        id: false,
        misc: false
    };

    showComponentId = () => {
        this.setState(() => {
            return {
                id: !this.state.id
            }
        })
    };

    showComponentMisc = () => {
        this.setState(() => {
            return {
                misc: !this.state.misc
            }
        })
    };

    render() {
        return (
            <div style={{ textAlign:'center', display:'flex' }}>                
                <div style={{ width: '20%', margin:'5%' }}>
                    <img src={Logo} style={{height:"170px", width:"120px"}} alt="Logo Kelompok 36"/>
                    <h1 style={{ color:'#676e02' }}>Order Makanan</h1>
                </div>
                <div style={{ width: '20%', margin:'5%' }}>
                    <button style={{ backgroundColor:'#676e02', color:'#f4f6f9' }} onClick={this.showComponentId}>
                        {this.state.id ? 'Hapus data pemesanan' : 'Isi data pemesanan'}
                    </button>
                    <br/><br/>
                    {this.state.id && <Id />}
                </div>
                <div style={{ width: '60%', margin:'5%' }}>                   
                    <button style={{ backgroundColor:'#676e02', color:'#f4f6f9' }} onClick={this.showComponentMisc}>
                        {this.state.misc ? 'Hapus data belanja' : 'Isi data belanja'}
                    </button>
                    <br/>
                    {this.state.misc && <Misc />}
                </div>
            </div>
        )
    };
};

export default Dashboard;