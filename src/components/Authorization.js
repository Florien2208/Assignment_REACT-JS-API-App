const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data', {
            headers: {
                'Authorization': 'Bearer ${token}',
            },
        });
        //handle the response
    }catch(error){
        console.error('Error fetching data: ', error);
    }
};