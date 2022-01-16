import { Props } from './TabbedSections.type';

export const MOCK_DATA_GHIBLI: Props = {
  id: 'tabulated-ghibli-movie-sections',
  accessibleTitle: 'The very first Studio Ghibli movies in chronological order',
  selectedTabIndex: 3,
  tabbedSections: [
    {
      title: '1986 - Castle in the Sky',
      children: (
        <>
          <h1>Castle in the Sky</h1>
          <img
            src='https://static.metacritic.com/images/products/movies/6/fc015b44d62e5baf83b8ec6c7a85ca70-250h.jpg'
            alt='The original Japanese DVD cover of Castle in the Sky'
          />

          <h2 id='ghibli-movies-tab-0-details-heading'>Movie details</h2>
          <dl aria-labelledby='ghibli-movies-tab-0-details-heading'>
            <dt>Director</dt>
            <dd>Hayao Miyazaki</dd>
            <dt>Release date</dt>
            <dd>August 2, 1986</dd>
            <dt>Rotten Tomatoes rating</dt>
            <dd>96%</dd>
            <dt>Metacritic rating</dt>
            <dd>78</dd>
          </dl>

          <h2 id='ghibli-movies-tab-0-links-heading'>Links and resources</h2>
          <ul aria-labelledby='ghibli-movies-tab-0-links-heading'>
            <li>
              <a href='https://www.rottentomatoes.com/m/castle_in_the_sky_1989'>
                Castle in the Sky Rotten Tomatoes page
              </a>
            </li>
            <li>
              <a href='https://www.metacritic.com/movie/castle-in-the-sky'>
                Castle in the Sky Metacritic page
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '1988 - Grave of the Fireflies',
      children: (
        <>
          <h1>Grave of the Fireflies</h1>
          <img
            src='https://static.metacritic.com/images/products/movies/3/00e60609ffe65d0521f921e399686cf6-250h.jpg'
            alt='The original Japanese DVD cover of Grave of the Fireflies'
          />

          <h2 id='ghibli-movies-tab-1-details-heading'>Movie details</h2>
          <dl aria-labelledby='ghibli-movies-tab-1-details-heading'>
            <dt>Director</dt>
            <dd>Isao Takahata</dd>
            <dt>Release date</dt>
            <dd>April 16, 1988</dd>
            <dt>Rotten Tomatoes rating</dt>
            <dd>100%</dd>
            <dt>Metacritic rating</dt>
            <dd>94</dd>
          </dl>

          <h2 id='ghibli-movies-tab-1-links-heading'>Links and resources</h2>
          <ul aria-labelledby='ghibli-movies-tab-1-links-heading'>
            <li>
              <a href='https://www.rottentomatoes.com/m/grave_of_the_fireflies'>
                Grave of the Fireflies Rotten Tomatoes page
              </a>
            </li>
            <li>
              <a href='https://www.metacritic.com/movie/grave-of-the-fireflies-1988'>
                Grave of the Fireflies Metacritic page
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '1988 - My Neighbor Totoro',
      children: (
        <>
          <h1>My Neighbor Totoro</h1>
          <img
            src='https://static.metacritic.com/images/products/movies/5/5b360aac154d10bc9c16caee2eedb21f-250h.jpg'
            alt='The original Japanese DVD cover of My Neighbor Totoro'
          />

          <h2 id='ghibli-movies-tab-2-details-heading'>Movie details</h2>
          <dl aria-labelledby='ghibli-movies-tab-2-details-heading'>
            <dt>Director</dt>
            <dd>Hayao Miyazaki</dd>
            <dt>Release date</dt>
            <dd>April 16, 1988</dd>
            <dt>Rotten Tomatoes rating</dt>
            <dd>94%</dd>
            <dt>Metacritic rating</dt>
            <dd>86</dd>
          </dl>

          <h2 id='ghibli-movies-tab-2-links-heading'>Links and resources</h2>
          <ul aria-labelledby='ghibli-movies-tab-2-links-heading'>
            <li>
              <a href='https://www.rottentomatoes.com/m/my_neighbor_totoro'>
                My Neighbor Totoro Rotten Tomatoes page
              </a>
            </li>
            <li>
              <a href='https://www.metacritic.com/movie/my-neighbor-totoro'>
                My Neighbor Totoro Metacritic page
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "1989 - Kiki's Delivery Service",
      children: (
        <>
          <h1>Kiki's Delivery Service</h1>
          <img
            src='https://static.metacritic.com/images/products/movies/0/e9a5c74318d91245c0a2fca3b2456cbe-250h.jpg'
            alt="The original Japanese DVD cover of Kiki's Delivery Service"
          />

          <h2 id='ghibli-movies-tab-3-details-heading'>Movie details</h2>
          <dl aria-labelledby='ghibli-movies-tab-3-details-heading'>
            <dt>Director</dt>
            <dd>Hayao Miyazaki</dd>
            <dt>Release date</dt>
            <dd>July 29, 1989</dd>
            <dt>Rotten Tomatoes rating</dt>
            <dd>98%</dd>
            <dt>Metacritic rating</dt>
            <dd>83</dd>
          </dl>

          <h2 id='ghibli-movies-tab-3-links-heading'>Links and resources</h2>
          <ul aria-labelledby='ghibli-movies-tab-3-links-heading'>
            <li>
              <a href='https://www.rottentomatoes.com/m/kikis_delivery_service'>
                Kiki's Delivery Service Rotten Tomatoes page
              </a>
            </li>
            <li>
              <a href='https://www.metacritic.com/movie/kikis-delivery-service'>
                Kiki's Delivery Service Metacritic page
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '1991 - Only Yesterday',
      children: (
        <>
          <h1>Only Yesterday</h1>
          <img
            src='https://static.metacritic.com/images/products/movies/7/3ffb2748252f1971065b3fec39b91f72-250h.jpg'
            alt='The original Japanese DVD cover of Only Yesterday'
          />

          <h2 id='ghibli-movies-tab-4-details-heading'>Movie details</h2>
          <dl aria-labelledby='ghibli-movies-tab-4-details-heading'>
            <dt>Director</dt>
            <dd>Isao Takahata</dd>
            <dt>Release date</dt>
            <dd>July 20, 1991</dd>
            <dt>Rotten Tomatoes rating</dt>
            <dd>100%</dd>
            <dt>Metacritic rating</dt>
            <dd>90</dd>
          </dl>

          <h2 id='ghibli-movies-tab-4-links-heading'>Links and resources</h2>
          <ul aria-labelledby='ghibli-movies-tab-4-links-heading'>
            <li>
              <a href='https://www.rottentomatoes.com/m/only_yesterday_1991'>
                Only Yesterday Rotten Tomatoes page
              </a>
            </li>
            <li>
              <a href='https://www.metacritic.com/movie/only-yesterday-1991'>
                Only Yesterday Metacritic page
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '1992 - Porco Rosso',
      children: (
        <>
          <h1>Porco Rosso</h1>
          <img
            src='https://static.metacritic.com/images/products/movies/0/b4dc4270d24c395525a9f77d4ba84f58-250h.jpg'
            alt='The original Japanese DVD cover of Porco Rosso'
          />

          <h2 id='ghibli-movies-tab-5-details-heading'>Movie details</h2>
          <dl aria-labelledby='ghibli-movies-tab-5-details-heading'>
            <dt>Director</dt>
            <dd>Hayao Miyazaki</dd>
            <dt>Release date</dt>
            <dd>July 18, 1992</dd>
            <dt>Rotten Tomatoes rating</dt>
            <dd>95%</dd>
            <dt>Metacritic rating</dt>
            <dd>83</dd>
          </dl>

          <h2 id='ghibli-movies-tab-5-links-heading'>Links and resources</h2>
          <ul aria-labelledby='ghibli-movies-tab-5-links-heading'>
            <li>
              <a href='https://www.rottentomatoes.com/m/porco_rosso'>
                Porco Rosso Rotten Tomatoes page
              </a>
            </li>
            <li>
              <a href='https://www.metacritic.com/movie/porco-rosso'>
                Porco Rosso Metacritic page
              </a>
            </li>
          </ul>
        </>
      ),
    },
  ],
};

export const MOCK_DATA_TOSCA: Props = {
  id: 'tabulated-tosca-album-sections',
  accessibleTitle: "Rob's favourite Tosca albums",
  selectedTabIndex: 1,
  tabbedSections: [
    {
      title: '2000 - Suzuki',
      children: (
        <>
          <h1>Suzuki</h1>
          <img
            src='https://img.discogs.com/wQjCIqMUGzmHbQoCz7kBPB3LMY8=/fit-in/600x537/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-446712-1499001156-7776.jpeg.jpg'
            alt="The album cover of Tosca's Suzuki"
          />

          <h2 id='tosca-albums-tab-0-details-heading'>Album details</h2>
          <dl aria-labelledby='tosca-albums-tab-0-details-heading'>
            <dt>Release year</dt>
            <dd>2000</dd>
            <dt>Genre</dt>
            <dd>Electronic</dd>
            <dt>Style</dt>
            <dd>Trip Hop, Downtempo</dd>
          </dl>

          <h2 id='tosca-albums-tab-0-tracklist-heading'>Tracklist</h2>
          <ol aria-labelledby='tosca-albums-tab-0-tracklist-heading'>
            <li>Pearl In (0:25)</li>
            <li>Suzuki (6:04)</li>
            <li>Annanas (6:34)</li>
            <li>Orozco (5:25)</li>
            <li>Busenfreund (5:16)</li>
            <li>Honey (5:57)</li>
            <li>Bass On The Boat (6:03)</li>
            <li>John Tomes (5:05)</li>
            <li>Ocean Beat (4:32)</li>
            <li>The Key (7:00)</li>
            <li>Doris Dub (4:00)</li>
            <li>Pearl Off (3:07)</li>
          </ol>

          <h2 id='tosca-albums-tab-0-links-heading'>Links and resources</h2>
          <ul aria-labelledby='tosca-albums-tab-0-links-heading'>
            <li>
              <a href='https://www.discogs.com/master/34816-Tosca-Suzuki'>
                Suzuki Discogs page
              </a>
            </li>
            <li>
              <a href='https://toscak7.bandcamp.com/album/suzuki'>
                Suzuki Bandcamp page
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '2003 - Dehli9',
      children: (
        <>
          <h1>Dehli9</h1>
          <img
            src='https://img.discogs.com/DAd7IW_V21S-aktmPjZjwg-IIiA=/fit-in/600x529/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-116831-1180536611.jpeg.jpg'
            alt="The album cover of Tosca's Dehli9"
          />

          <h2 id='tosca-albums-tab-1-details-heading'>Album details</h2>
          <dl aria-labelledby='tosca-albums-tab-1-details-heading'>
            <dt>Release year</dt>
            <dd>2003</dd>
            <dt>Genre</dt>
            <dd>Electronic, Classical</dd>
            <dt>Style</dt>
            <dd>Dub, Downtempo, Modern Classical, Ambient</dd>
          </dl>

          <h2 id='tosca-albums-tab-1-tracklist-heading'>Tracklist</h2>
          <ol aria-labelledby='tosca-albums-tab-1-tracklist-heading'>
            <li>Oscar (5:20)</li>
            <li>Me & Yoko Ono (6:08)</li>
            <li>Gute Laune (4:56)</li>
            <li>Mango Di Bango (6:17)</li>
            <li>Wonderful (5:02)</li>
            <li>Every Day & Every Night (6:14)</li>
            <li>Dave Dudley (6:25)</li>
            <li>Rolf Royce (5:47)</li>
            <li>Sperl (7:39)</li>
            <li>La Vendeuse Des Chaussures Des Femmes Part 1 (6:51)</li>
            <li>D-Moll (Session 1) (3:00)</li>
            <li>Einschlaf (Session 2) (1:50)</li>
            <li>Wien In E (Session 3) (3:12)</li>
            <li>Schwimmer (Session 4) (3:43)</li>
            <li>1504 / 7 (Session 5) (3:25)</li>
            <li>Slow Hell (Session 6) (3:08)</li>
            <li>Song (Session 7) (2:58)</li>
            <li>Romanze In Es (Session 8) (2:22)</li>
            <li>Fluß (Session 9) (6:13)</li>
            <li>Ping (Session 10) (3:16)</li>
            <li>2504 / 1 (Session 11) (3:06)</li>
            <li>Piano 1 (Session 12) (8:45)</li>
          </ol>

          <h2 id='tosca-albums-tab-1-links-heading'>Links and resources</h2>
          <ul aria-labelledby='tosca-albums-tab-1-links-heading'>
            <li>
              <a href='https://www.discogs.com/master/34805-Tosca-Dehli9'>
                Dehli9 Discogs page
              </a>
            </li>
            <li>
              <a href='https://toscak7.bandcamp.com/album/dehli-9'>
                Dehli9 Bandcamp page
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '2005 - J.A.C.',
      children: (
        <>
          <h1>J.A.C.</h1>
          <img
            src='https://img.discogs.com/HGptUmxEQzhP5jUwGaM0POBT9yE=/fit-in/600x528/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-432608-1504826441-2419.jpeg.jpg'
            alt="The album cover of Tosca's J.A.C."
          />

          <h2 id='tosca-albums-tab-2-details-heading'>Album details</h2>
          <dl aria-labelledby='tosca-albums-tab-2-details-heading'>
            <dt>Release year</dt>
            <dd>2005</dd>
            <dt>Genre</dt>
            <dd>Electronic</dd>
            <dt>Style</dt>
            <dd>Dub, Future Jazz, Downtempo, Ambient</dd>
          </dl>

          <h2 id='tosca-albums-tab-2-tracklist-heading'>Tracklist</h2>
          <ol aria-labelledby='tosca-albums-tab-2-tracklist-heading'>
            <li>Rondo Acapricio (6:12)</li>
            <li>Heidi Bruehl (4:44)</li>
            <li>Superrob (4:18)</li>
            <li>John Lee Huber (4:17)</li>
            <li>Pyjama (3:52)</li>
            <li>The Big Sleep (6:06)</li>
            <li>Damentag (4:42)</li>
            <li>Naschkatze (4:18)</li>
            <li>Züri (5:30)</li>
            <li>Sala (8:18)</li>
            <li>Forte (3:55)</li>
            <li>No More Olives (5:47)</li>
          </ol>

          <h2 id='tosca-albums-tab-2-links-heading'>Links and resources</h2>
          <ul aria-labelledby='tosca-albums-tab-2-links-heading'>
            <li>
              <a href='https://www.discogs.com/master/34830-Tosca-JAC'>
                J.A.C. Discogs page
              </a>
            </li>
            <li>
              <a href='https://toscak7.bandcamp.com/album/jac'>
                J.A.C. Bandcamp page
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '2009 - No Hassle',
      children: (
        <>
          <h1>No Hassle</h1>
          <img
            src='https://img.discogs.com/pWBMxtXOTHdisAxD9Sn1qoHMS7Y=/fit-in/531x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1746379-1284500331.jpeg.jpg'
            alt="The album cover of Tosca's No Hassle"
          />

          <h2 id='tosca-albums-tab-3-details-heading'>Album details</h2>
          <dl aria-labelledby='tosca-albums-tab-3-details-heading'>
            <dt>Release year</dt>
            <dd>2009</dd>
            <dt>Genre</dt>
            <dd>Electronic</dd>
            <dt>Style</dt>
            <dd>Downtempo, Ambient</dd>
          </dl>

          <h2 id='tosca-albums-tab-3-tracklist-heading'>Tracklist</h2>
          <h3 id='tosca-albums-tab-3-tracklist-heading__studio'>Studio</h3>
          <ol aria-labelledby='tosca-albums-tab-3-tracklist-heading " - " tosca-albums-tab-3-tracklist-heading__studio'>
            <li>My First (5:42)</li>
            <li>Elitsa (4:55)</li>
            <li>Springer (5:12)</li>
            <li>Birthday (4:49)</li>
            <li>Oysters In May (4:36)</li>
            <li>Joe Si Ha (4:09)</li>
            <li>Elektra Bregenz (4:08)</li>
            <li>Fondue (3:33)</li>
            <li>Rosa (5:07)</li>
            <li>Raymondo (5:16)</li>
            <li>Mrs. Bongo (5:34)</li>
            <li>No Hassle (6:24)</li>
          </ol>

          <h3 id='tosca-albums-tab-3-tracklist-heading__live'>Live</h3>
          <ol aria-labelledby='tosca-albums-tab-3-tracklist-heading " - " tosca-albums-tab-3-tracklist-heading__live'>
            <li>Piano Intro (4:02)</li>
            <li>No Hassle (5:47)</li>
            <li>Oysters In May (4:53)</li>
            <li>My First Ambient (1:08)</li>
            <li>My First (5:27)</li>
            <li>Springer Ambient (1:58)</li>
            <li>Springer (5:20)</li>
            <li>Knoll (4:30)</li>
            <li>Joe Si Ha (3:49)</li>
            <li>Elektra Bregenz (4:34)</li>
            <li>Birthday (4:29)</li>
            <li>Utrecht Spa (4:22)</li>
            <li>Mrs. Bongo (5:31)</li>
            <li>Rosa (6:24)</li>
          </ol>

          <h2 id='tosca-albums-tab-3-links-heading'>Links and resources</h2>
          <ul aria-labelledby='tosca-albums-tab-3-links-heading'>
            <li>
              <a href='https://www.discogs.com/master/120494-Tosca-No-Hassle'>
                No Hassle Discogs page
              </a>
            </li>
            <li>
              <a href='https://toscak7.bandcamp.com/album/no-hassle'>
                No Hassle Bandcamp page
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '2013 - Odeon',
      children: (
        <>
          <h1>Odeon</h1>
          <img
            src='https://img.discogs.com/JOP9GrGrqfMpQYoEZ2GO4MJlWNg=/fit-in/600x554/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4203046-1383473949-1616.jpeg.jpg'
            alt="The album cover of Tosca's Odeon"
          />

          <h2 id='tosca-albums-tab-4-details-heading'>Album details</h2>
          <dl aria-labelledby='tosca-albums-tab-4-details-heading'>
            <dt>Release year</dt>
            <dd>2013</dd>
            <dt>Genre</dt>
            <dd>Electronic</dd>
            <dt>Style</dt>
            <dd>Downtempo, Ambient</dd>
          </dl>

          <h2 id='tosca-albums-tab-4-tracklist-heading'>Tracklist</h2>
          <ol aria-labelledby='tosca-albums-tab-4-tracklist-heading'>
            <li>Zur Guten Ambience (3:02)</li>
            <li>What If (4:55)</li>
            <li>Heatwave (5:39)</li>
            <li>Jayjay (6:18)</li>
            <li>Soda (2:33)</li>
            <li>Meixner (6:05)</li>
            <li>Stuttgart (5:47)</li>
            <li>In My Brain Prinz Eugen (5:07)</li>
            <li>Cavallo (6:39)</li>
            <li>Bonjour (5:24)</li>
          </ol>

          <h2 id='tosca-albums-tab-4-links-heading'>Links and resources</h2>
          <ul aria-labelledby='tosca-albums-tab-4-links-heading'>
            <li>
              <a href='https://www.discogs.com/master/511833-Tosca-Odeon'>
                Odeon Discogs page
              </a>
            </li>
            <li>
              <a href='https://toscak7.bandcamp.com/album/odeon'>
                Odeon Bandcamp page
              </a>
            </li>
          </ul>
        </>
      ),
    },
  ],
};
