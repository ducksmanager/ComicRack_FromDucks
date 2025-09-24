# ComicRack_FromDucks

A ComicRack plugin/script to fetch Inducks data for Disney comic books.

Version 3 of this plugin uses the open-source [DucksManager API](https://github.com/ducksmanager/core/blob/6d0a30f/packages/api/http.ts#L31-L243) to get the Inducks data in a structured way, contrary to version 2 which was scraping the Inducks website using regular expressions.

### Caveats and known issues

- The plugin will guess the Inducks publication name of books based on the current series name. Beware that some publications have an identical name, even within the same publication country. For instance, dk/MM and dk/MMM are both titled "Mickey Mouse".
- The plugin will also use the language of the books to determine what Inducks publication it corresponds to. However, one language can't always be matched to a single country, and language codes are not always the same as country codes. Make sure to double-check the pre-selected publication code before pressing "OK" in the plugin's window.
- Character names are written in their English form in the books' metadata. This is in order to facilitate sorting/filtering when owning comic books of different languages that include the same characters

#### You should consider using [ComicRack Community Edition](https://github.com/maforget/ComicRackCE). And if you can please contribute to the project.
