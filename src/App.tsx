import { TabbedSections } from '@organisms/TabbedSections';
import {
  MOCK_DATA_GHIBLI as GhiblyMovieData,
  MOCK_DATA_TOSCA as ToscaAlbumData,
} from '@organisms/TabbedSections/TabbedSections.mock';

function App() {
  return (
    <main id='main'>
      <TabbedSections {...GhiblyMovieData} />
      <TabbedSections {...ToscaAlbumData} />
    </main>
  );
}

export default App;
