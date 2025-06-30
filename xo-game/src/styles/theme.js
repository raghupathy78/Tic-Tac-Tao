const theme = {
  colors: {
    background: '#000000',
    primary: '#FFFFFF',
    secondary: '#FFCC00',
    text: '#FFFFFF',
    border: '#FFFFFF',
  },
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '5px',
    padding: '20px',
    border: '2px solid #FFFFFF',
    borderRadius: '10px',
  },
  square: {
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: '#FFFFFF',
    backgroundColor: '#333333',
    border: '2px solid #FFFFFF',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  squareHover: {
    backgroundColor: '#444444',
  },
  multiplayer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
};

export default theme;