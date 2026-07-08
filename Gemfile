source "https://rubygems.org"

# Replicates the GitHub Pages build environment (Jekyll + whitelisted plugins
# + jekyll-remote-theme) so the site can be built and previewed locally with:
#   bundle exec jekyll build
gem "github-pages", group: :jekyll_plugins

# Required for `jekyll serve` on Ruby 3.x (webrick is no longer bundled with Ruby)
gem "webrick"

# Windows does not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1" if Gem.win_platform?
