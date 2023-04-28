const moviesContainer = document.querySelector('.movies-container')
const movieDirector = document.querySelector('.movie__director--info')

movies.forEach((item)=> {
    let movie = document.createElement('div')
    movie.setAttribute('class', 'movie')
    let movieName = document.createElement('p')
    movieName.setAttribute('class', 'movie__name')
    let movieNameInfo = document.createElement('span')
    movieNameInfo.setAttribute('class', 'movie__name--info')
    let movieYear = document.createElement('p')
    movieYear.setAttribute('class', 'movie__year')
    let movieYearInfo = document.createElement('span')
    movieYearInfo.setAttribute('class', 'movie__year--info')
    let movieDirector = document.createElement('p')
    movieDirector.setAttribute('class', 'movie__director')
    let movieDirectorInfo = document.createElement('span')
    movieDirectorInfo.setAttribute('class', 'movie__director--info')

    movieNameInfo.textContent = item.name
    movieName.textContent = "Name: "
    movieName.append(movieNameInfo)

    movieYearInfo.textContent = item.year
    movieYear.textContent = "Year: "
    movieYear.append(movieYearInfo)

    movieDirectorInfo.textContent = item.director
    movieDirector.textContent = "Director: "
    movieDirector.append(movieDirectorInfo)

    movie.prepend(movieName)
    movie.append(movieYear)
    movie.append(movieDirector)

    moviesContainer.append(movie)
})