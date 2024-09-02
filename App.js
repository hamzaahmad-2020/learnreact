
const Heading = React.createElement('h1', 
    {
        id : 'title',
    } , 
    'Heading');
    const Heading2 = React.createElement('h2',
     {
        id: 'title'
     }, 
     'Heading2');
    const contanir = React.createElement('div', { id: 'contanir'}, [Heading,Heading2]);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(contanir);
