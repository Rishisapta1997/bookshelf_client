const styles = {
    allBooksContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '20px'
    },
    title: {
      fontSize: '35px',
      color: '#212121',
      marginBottom: '20px'
    },
    loaderContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    },
    booksGrid: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center'
    },
    bookCard: {
      border: '1px solid #212121',
      borderRadius: '10px',
      padding: '20px',
      boxSizing: 'border-box',
      width: '300px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer'
    },
    bookCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
    },
    bookTitle: {
      margin: '0 0 10px'
    },
    bookInfo: {
      margin: '0 0 5px'
    },
    detailsButton: {
      backgroundColor: '#212121',
      color: 'white',
      border: 'none',
      padding: '10px 15px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    detailsButtonHover: {
      backgroundColor: '#333'
    },
    noData: {
      fontSize: '30px',
      color: '#212121'
    }
  };