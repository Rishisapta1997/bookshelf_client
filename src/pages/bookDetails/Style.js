const styles = {
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    logoImg: {
        width: '80px',
        height: '80px',
        objectFit: 'contain',
        marginTop: '40px'
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
        width: '500px',
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
    inputDiv: {
        display: 'flex',
        flexDirection: 'column'
    },
    inputBoxDiv: {
        marginBottom: '15px',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'column'
    },
    inputLabel: {
        fontSize: '17px',
        color: '#212121',
        marginRight: '10px',
        fontFamily: 'Poppins, Arial, sans-serif',
        fontWeight: 'bold',
        marginBottom: '10px',
        marginLeft: '10px'
    },
    inputBox: {
        padding: '10px',
        borderRadius: '25px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid #d3d3d3',
        fontFamily: 'Poppins, Arial, sans-serif',
        fontSize: '17px',
        width: '100%',
        boxSizing: 'border-box',
        outline: 'none',
        width: '400px',
        paddingLeft: '20px'
    },
    buttonDiv: {
        display: 'flex',
        marginTop: '15px',
        marginBottom: '15px',
        gap: 40
    },
    navigateBtn: {
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
    updateBtn: {
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
    }
}

export default styles;