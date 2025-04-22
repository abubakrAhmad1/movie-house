import fs from 'fs'
import path from 'path'

export default function ShowMovies({movies}) {
    return(
        <div>
            {
                movies.map(movie => (
                    
                ))
            }
        </div>
    )
}


export async function getServerSideProps(context) {
    const id = context.params.fid;
    const filePath = path.join(process.cwd(),'data','data.json');
    const fileData = fs.readFileSync(filePath,'utf-8');
    const data = JSON.parse(fileData);
    const filterMovies = data.movies.filter(movie=>movie.genreId === id);
    return {
        props : {
            movies : filterMovies
        }
    }
}