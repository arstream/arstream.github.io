from __future__ import unicode_literals

LOAD_CONTENT_CACHE = False

SITEURL = 'http://arstream.github.io'
AUTHOR =  'Lev'
SITENAME = u'arstream'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'hy'

MARKUP = ('md', 'ipynb')

DEFAULT_DATE_FORMAT = '%B %d, %Y'

SUMMARY_MAX_LENGTH = 150
DEFAULT_PAGINATION = 10

PAGE_DIRS = ['pages']
ARTICLE_DIRS = ['articles']

THEME = 'themes/middle/'
STATIC_PATHS = ['images']

ARTICLE_URL = 'blog/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = 'blog/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'

# Paths are relative to `content`
STATIC_PATHS = ['images', 'favicon.ico', '404.html', 'robots.txt']

# THEME SETTINGS
DEFAULT_HEADER_BG = '/images/station1.jpg'
ABOUT_PAGE = '/pages/about.html'
TWITTER_USERNAME = ''
GITHUB_USERNAME = 'arstream'
SHOW_ARCHIVES = False
SHOW_FEED = True

GOOGLE_ANALYTICS_CODE = ''
GOOGLE_ANALYTICS_DOMAIN = ''
DISQUS_USERNAME = 'arstream'

# PLUGINS SETTINGS
PLUGIN_PATHS = ['plugins']
PLUGINS = ['sitemap', 'ipynb']

SITEMAP = {
    'format': 'xml'
}

IPYNB_EXTEND_STOP_SUMMARY_TAGS = [('h2', None), ('ol', None), ('ul', None)]