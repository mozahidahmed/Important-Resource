const { data: places, isLoading, refetch } = useQuery('places', () => fetch('https://comming-italy.onrender.com/places', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>

    }



    // fetch
    {places.map((place =>

        <Place key={place._id} place={place} refetch={refetch}></Place>
    ))}

