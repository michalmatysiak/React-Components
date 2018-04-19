var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    src: 'http://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2014/07/harry-potter-nowa-historia.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: 'https://t-eska.cdn.smcloud.net/common/K/K/s/KK2400613Exwz.jpg/ru-0-r-650,0-n-KK2400613Exwz_krol_lew_w_nowej_wersji_a_w_nim_beyonce_kiedy_premiera.jpg'
  },
  {
    id: 3,
    title: 'Władca pierścieni',
    desc: 'Film o frodo:)',
    src: 'https://media.teleman.pl/photos/Wladca-Pierscieni-Dwie-Wieze-2002.jpg'
  },
  {
    id: 4,
    title: 'Wikingowie',
    desc: 'Film o wikingach',
    src: 'https://fashionseriesblog.files.wordpress.com/2015/06/526b8e2c96f3ec8ace2e58f624512a69.jpg'
  },
  {
    id: 5,
    title: 'Gra o tron',
    desc: 'Film o Johnie Snow',
    src: 'https://postmediatorontosun.files.wordpress.com/2018/01/game-of-thrones-season-7-episode-6-jon-snow.jpg'
  }
];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDescription, {desc: this.props.movie.desc}),
        React.createElement(MovieSrc, {src: this.props.movie.src})
      )
    )
  }
});


var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
      )
  },
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
		);
	}
});


var MovieSrc = React.createClass({
	propTypes: {
		src: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('img', {src: this.props.src})
		);
	}
});

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },

  render: function() {
    var MovieElements = this.props.movies.map(function(movie) {
      return React.createElement(Movie, {
              key: movie.id,
              movie: movie
          });
      });
      return React.createElement('ul', {}, MovieElements);
  }
});


var element = React.createElement(MovieList, {movies: movies});

ReactDOM.render(element, document.getElementById('app'));