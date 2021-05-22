//should be a container that does data fetching and then renders its corresponding sub-component. That’s it.
import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    fetchGIFs = (search = "goku") => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=x1qEFtEywygn5zwA7NxCGhBolD9W4QgA&rating=g`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
        
    }

    componentDidMount() {
        this.fetchGIFs()
    }
}

export default GifListContainer