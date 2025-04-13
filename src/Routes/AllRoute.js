import {Route,Routes} from 'react-router-dom';
import {MovieList,MovieDetail,PageNotFound,Search} from '../Pages';
export const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movie/popular" element={<Search />} />
        <Route path="/movie/top" element={<Search />} />
        <Route path="/movie/upcoming" element={<Search />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
