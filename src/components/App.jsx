import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';

import styles from './App.module.css'; 

const API_KEY = '35924143-9020fc77f3274be39114409f4';
const API_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      images: [],
      loading: false,
      page: 1,
      selectedImage: null,
      isLastPage: false,
    };
  }

  fetchImages = (query, page) => {
    if (!query) return;

    this.setState({ loading: true });

    fetch(
      `${API_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
          loading: false,
          isLastPage: data.hits.length < PER_PAGE,
        }));
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        this.setState({ loading: false });
      });
  };

  handleSearch = (newQuery) => {
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
      isLastPage: false,
    });
  };

  loadMoreImages = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  openModal = (image) => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  componentDidMount() {
    this.fetchImages(this.state.query, this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page || prevState.query !== this.state.query) {
      if (this.state.page === 1) {
        this.setState({ images: [] });
      }
      this.fetchImages(this.state.query, this.state.page);
    }
  }

  render() {
    const { images, loading, selectedImage, isLastPage } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {loading && <Loader />}
        {images.length > 0 && !loading && !isLastPage && (
          <Button onClick={this.loadMoreImages}>Load More</Button>
        )}
        {selectedImage && <Modal image={selectedImage} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;
