const [items, setItems] = React.useState(['item 1']);

function handleClick() {
    setContar((contar) => contar + 1)
    setItems((items) => [ ...items, 'item' + (contar + 1)]);
}

<div>
     {items.map((item) => (
        <li key={item}>{ item }</li>
    ))}

    <button onClick={ handleClick }>{ contar }</button>
</div>

https://api.themoviedb.org/3/movie/popular?api_key=###&page=1
https://api.themoviedb.org/3/movie/popular?api_key=###&page=2
https://api.themoviedb.org/3/movie/popular?api_key=###&page=3