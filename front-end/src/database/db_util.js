import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// fetch a paginated records list


export async function getAllSeries(){
    try {
        const records = await pb.collection('series').getFullList({
            sort: 'created',
        });
        return {
            response: "Request was succesfully transferred", 
            data: JSON.parse(JSON.stringify(records)) 
        }
    } catch (err) {
        return {
            response: err.response,
            data: []
        }
    }
}

export async function getSingleSeriesByTitle({title}){
    try {
        const record = await pb.collection('series').getFirstListItem(
            `title?~"${title}"`);
        return {
            response: "Request was succesfully transferred", 
            data: JSON.parse(JSON.stringify(record)) 
        }
    } catch (err) {
        return {
            response: err.response,
            data: []
        }
    }
}

export async function getSingleSeriesByID({id}){
    try {
        const record = await pb.collection('series').getFirstListItem(
            `id="${id}"`);
        return {
            response: "Request was succesfully transferred", 
            data: JSON.parse(JSON.stringify(record)) 
        }
    } catch (err) {
        return {
            response: err.response,
            data: []
        }
    }
}

export async function createSeries({title, liked = false, rating = 0, description ="", img = "", section_count, series_details = "", goodreads_link = "", rotten_tomatoes_link = "", wiki_link = "", imdb_link = "", flexible_link = "", section_type = "Season"}){
    const data = {
        "title": title,
        "liked": liked,
        "rating": rating,
        "description": description,
        "img": img,
        "section_count": section_count,
        "series_details": series_details,
        "goodreads_link": goodreads_link,
        "rotten_tomatoes_link": rotten_tomatoes_link,
        "wiki_link": wiki_link,
        "imdb_link": imdb_link,
        "flexible_link": flexible_link
    };
    try {
        const record = await pb.collection('series').create(data);
        for (let i = 1; i <= section_count; i++) {
            let series_id = await (await getSingleSeriesByTitle({title: title})).data.id
            // console.log(series_id)
            // console.log(section_type)
            // console.log(i)
            console.log(await createSection({related_series_id: series_id, section_type: section_type, section_no: i}))
        }
        return {
            response: "Request was succesfully transferred"
        }
    } catch (err) {
        return {
            response: err.response
        }
    }
}

export async function updateSeries({series_id, title, liked, rating, description, img, section_count, series_details, goodreads_link, rotten_tomatoes_link, wiki_link, imdb_link, flexible_link}){
    try {
        let data = {
            "title": title,
            "liked": liked,
            "rating": rating,
            "description": description,
            "img": img,
            "section_count": section_count,
            "series_details": series_details,
            "goodreads_link": goodreads_link,
            "rotten_tomatoes_link": rotten_tomatoes_link,
            "wiki_link": wiki_link,
            "imdb_link": imdb_link,
            "flexible_link": flexible_link
        };

        const record = await pb.collection('series').update(series_id, data);
        return {
            response: "Request was succesfully transferred"
        }
    } catch (err) {
        return {
            response: err.response
        }
    }
}

export async function deleteSeries({series_id}){
    await pb.collection('series').delete(series_id);
}

export async function createSection({related_series_id, section_type, section_no}){
    try {
        const data = {
            "name": `${section_type} ${section_no}`,
            "related_series": related_series_id,
            "details": "",
            "no": section_no
        };
        const record = await pb.collection('sections').create(data);
        return {
            response: "Request was succesfully transferred"
        }
    } catch (err) {
        return {
            response: err.response
        }
    }
}

//This function can NOT change section_no or related_series id as it is
export async function updateSectionBySeriesID({details, name, related_series_id, section_no}){
    try {
        const data = {
            "name": name,
            "related_series": related_series_id,
            "details": details,
            "no": section_no
        };
        let section_id = (await getSectionBySeriesID({series_id: related_series_id, section_no: section_no})).data.id
        const record = await pb.collection('sections').update(section_id, data);
        return {
            response: "Request was succesfully transferred"
        }
    } catch (err) {
        return {
            response: err.response
        }
    }
}

//This function can NOT change section_no or related_series id as it is
export async function updateSectionBySeriesTitle({details, name, related_series_title, section_no}){
    try {
        const data = {
            "name": name,
            "related_series": undefined,
            "details": details,
            "no": undefined
        };
        let section_id = await (await getSectionBySeriesTitle({series_title: related_series_title, section_no: section_no})).data.id
        const record = await pb.collection('sections').update(section_id, data);
        return {
            response: "Request was succesfully transferred"
        }
    } catch (err) {
        return {
            response: err.response
        }
    }
}

//This function can NOT change section_no or related_series id as it is
export async function updateSectionByID({section_id, name, details}){
    try {
        const data = {
            "name": name,
            "related_series": undefined,
            "details": details,
            "no": undefined
        };
        const record = await pb.collection('sections').update(section_id, data);
        return {
            response: "Request was succesfully transferred"
        }
    } catch (err) {
        return {
            response: err.response
        }
    }
}

export async function getSectionBySeriesID({series_id, section_no}){
    try {
        const record = await pb.collection('sections').getFirstListItem(`related_series.id="${series_id}" && no="${section_no}"`, {
            expand: 'relField1,relField2.subRelField',
        });
        return {
            response: "Request was succesfully transferred",
            data: JSON.parse(JSON.stringify(record))
        }
    } catch (err) {
        return {
            response: err.response
        }
    }
}

export async function getSectionBySeriesTitle({series_title, section_no}){
    try {
        let series_id = (await getSingleSeriesByTitle({title: series_title})).data.id
        const record = await pb.collection('sections').getFirstListItem(`related_series.id="${series_id}" && no="${section_no}"`, {
            expand: 'relField1,relField2.subRelField',
        });
        return {
            response: "Request was succesfully transferred",
            data: JSON.parse(JSON.stringify(record))
        }
    } catch (err) {
        return {
            response: err.response
        }
    }
}

export async function getSectionsBySeriesTitle({series_title}){
    try {
        let series_id = (await getSingleSeriesByTitle({title: series_title})).data.id
        const records = await pb.collection('sections').getFullList({
            sort: '-created',
            filter: `related_series.id="${series_id}"`
        });
        return {
            response: "Request was succesfully transferred",
            data: JSON.parse(JSON.stringify(records))
        }
    } catch (err) {
        return {
            response: err.response
        }
    }
}

export async function deleteSectionByID({section_id}){
    try {
        await pb.collection('sections').delete(section_id);
        return {
            response: "Request was succesfully transferred",
        }
    } catch (err) {
        return {
            response: err.response
        }
    }
}

export async function deleteSectionBySeriesTitle({series_title, section_no}){
    try {
        let section_id = await (await getSectionBySeriesTitle({series_title: series_title, section_no: section_no})).data.id
        await pb.collection('sections').delete(section_id);
        return {
            response: "Request was succesfully transferred",
        }
    } catch (err) {
        return {
            response: err.response
        }
    }
}

export async function toggleLiked({series_id}){
    try {
        let series_data = (await getSingleSeriesByID({id: series_id})).data
        await updateSeries({series_id: series_id, liked: !series_data.liked})
        return {
            response: "Request was succesfully transferred",
        }
    } catch (err) {
        return {
            response: err.response
        }
    } 
}



async function main() {
    let avatar = await getSingleSeriesByTitle({title: "Avatar"})
    //console.log(await createSection({section_no: 1, related_series_id: "3qda7m0d15o6wlt", section_type: "Season"}))
    //await createSeries({title: "VGHS", liked: false, section_count: 3, section_type: "Season",description: "A youtube series made by rooster teeth a very long time ago", rating: 6})
    //console.log(await getSectionIDBySeries({series_id: "rt414u1ppznj35r", section_no: 2}))
    //console.log(await getSectionIDBySeriesTitle({series_title: "VGHS", section_no: 1}))
    //console.log(await updateSectionBySeriesTitle({details: "VGHS season 3 details", related_series_title: "VGHS", section_no: 3}))
    //console.log(await updateSectionBySeriesID({details: "VGHS season 3 details Your mom", related_series_id: "rt414u1ppznj35r", section_no: 3}))
    //console.log(await updateSeries({series_id: (await getSingleSeriesByTitle("Avatar")).data.id, title: "Avatar the last airbender", rating: 9}))
    //await deleteSectionBySeriesTitle({series_title: "VGHS", section_no: 3})
    //await deleteSectionByID({section_id: "8k5d86mv8qznrm4"})
    //await deleteSeries({series_id: (await getSingleSeriesByTitle("VGHS")).data.id})
    //console.log(await getSectionsBySeriesTitle({series_title: "VGHS"}))
    //console.log(await toggleLiked({series_id: "3qda7m0d15o6wlt"}))
    //await createSeries({title: "Solo Leveling", section_count: "4", section_type: "Volume"})
}

main()