import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomeComponent from './components/home/HomeComponent';
import TextField from '@material-ui/core/TextField';
import { FormControl, CircularProgress, MuiThemeProvider } from '@material-ui/core';

import CardService from './services/card/CardService';
import theme from './styles/theme';

class App extends Component {

    state = {
        article: '',
        loading: false,
        cards: [],
    }

    submitArticle = event => {
        const { article } = this.state;
        event.preventDefault();

        this.setState({
            loading: true
        }, () => CardService.getArticleInformations({ name: article })
            .then(res => {
                this.setState({loading: false, cards: [...res]});
                console.log(res);
            })
            .catch(err => {
                this.setState({loading: false});
                console.log(err);
            })
        );
    }

    handleArticle = event => {
        this.setState({
            article: event.target.value,
        })
    }

    render() {
        const { article, loading, cards } = this.state;

        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <form className='appTextfieldContainer' onSubmit={this.submitArticle} >
                        <TextField
                            className='appTextfield'
                            label="Article"
                            variant="outlined"
                            value={article}
                            onChange={this.handleArticle}
                            disabled={loading}/>
                    </form>
                    <div className='appBody'>
                        {loading ?
                            <CircularProgress className='appLoading' />
                            :
                            <HomeComponent cards={cards} />
                        }
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;