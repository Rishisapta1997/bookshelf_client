const styles = {
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  subMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    width: '100%',
  },
  mainHeadingDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20px'
  },
  logoImg: {
    width: '100px',
    height: '100px',
    objectFit: 'contain'
  },
  pageTitle: {
    fontSize: '35px',
    color: '#212121',
    fontFamily: 'Poppins, Arial, sans-serif',
    marginBottom: '10px'
  },
  pageSubTitle: {
    fontSize: '15px',
    color: '#686868',
    fontFamily: 'Poppins, Arial, sans-serif',
    marginBottom: '50px'
  },
  addBtnDiv: {
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '40px'
  },
  loaderDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardSubContainer: {
    border: '1px solid #d3d3d3',
    borderRadius: '15px',
    padding: '20px',
    boxSizing: 'border-box',
    width: '350px',
    boxShadow: '8px 8px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: "#F2F3F4"
  },
  cardHeading: {
    fontSize: '25px',
    color: '#212121',
    fontFamily: 'Poppins, Arial, sans-serif',
    textAlign: 'center'
  },
  authorDiv: {
    display: 'flex',
    marginBottom: '0'
  },
  pyDiv: {
    display: 'flex',
    marginBottom: '10px'
  },
  labelTxt: {
    fontSize: '17px',
    color: '#212121',
    marginRight: '10px',
    fontFamily: 'Poppins, Arialsans- serif',
    fontWeight: 'bold'
  },
  authorTxt: {
    fontSize: '17px',
    color: '#686868',
    marginBottom: '0',
    fontFamily: 'Poppins, Arial, sans-serif'
  },
  pyTxt: {
    fontSize: '17px',
    color: '#686868',
    fontFamily: 'Poppins, Arial, sans-serif'
  },
  buttonDiv: {
    display: 'flex'
  },
  deleteBtn: {
    background: '#FF4500',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    width: '150px',
    height: '35px',
    fontFamily: 'Poppins, Arial, sans-serif',
    cursor: 'pointer',
    fontSize: '15px',
    marginRight: '10px'
  },
  editBtn: {
    background: '#1F2B4D',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    width: '150px',
    height: '35px',
    fontFamily: 'Poppins, Arial, sans-serif',
    cursor: 'pointer',
    fontSize: '15px',
    marginLeft: '10px'
  },
  noDataDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  noDataImg: {
    width: '400px',
    height: '400px',
    marginBottom: '10px'
  },
  noDataTxt: {
    fontSize: '30px',
    color: '#212121',
    marginRight: '10px',
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeight: 'bold'
  }
};

export default styles;