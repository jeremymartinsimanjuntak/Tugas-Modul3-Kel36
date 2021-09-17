import React, {Component} from "react";

class Id extends Component {
    componentWillMount() {
        alert('Silahkan isi ambil no antriannya')
    }

    state = {
        kodeawal: '',
        antri: ''
    }

    handlekodeawal = (event) => {
        const { name, value } = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }

    handleantri = (event) => {
        const { name, value } = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }

    render() {
        return (
            <>
                <label for="kodeawal">Kode Awal Pembelian:</label><br/>
                <input type="number" onChange={this.handlekodeawal} name='kodeawal' value={this.state.kodeawal} style={{ color:'#676e02'}} />
                <br/>
                <label for="noantri">Nomor Antrian:</label><br/>
                <input type="number" onChange={this.handleantri} name='noantri' value={this.state.noantri} style={{ color:'#676e02'}} />
                <br/><br/>
                <label for="Kode Transaksi:">Kode Akhir:</label><br/>             
                <span style={{ color:'#676e02'}}>{this.state.kodeawal}{this.state.noantri}</span>
            </>
        )
    }
}

export default Id;