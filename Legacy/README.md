[![PcapPlusPlus Logo](/resources/logo_color.png)](https://pcapplusplus.github.io)

[PcapPlusPlus](https://pcapplusplus.github.io) is a multiplatform C++ library for capturing, parsing and crafting of network packets. It is designed to be efficient, powerful and easy to use.

PcapPlusPlus enables decoding and forging capabilities for a large variety of network protocols. It also provides easy to use C++ wrappers for the most popular packet processing engines such as [libpcap](https://www.tcpdump.org/), [WinPcap](https://www.winpcap.org/), [DPDK](https://www.dpdk.org/) and [PF_RING](https://www.ntop.org/products/packet-capture/pf_ring/).

This repo contains the content for [PcapPlusPlus web-site](https://pcapplusplus.github.io).

The project itself can be found here: <https://github.com/seladb/PcapPlusPlus>

## Getting Started

### Prerequisites

1. Git
2. [Jekyll](https://jekyllrb.com/docs/installation/)

### Running locally

1. Clone this repo: `git clone https://github.com/PcapPlusPlus/pcapplusplus.github.io.git`
2. Run the web-site using Bundler: `bundle exec jekyll serve`
3. Browse to `http://localhost:4000`

## Overview

This web-site is built using [Jekyll](https://jekyllrb.com/) and uses [Just The Docs](https://pmarsceill.github.io/just-the-docs/) theme for most of its content.

The API reference is generated using [Doxygen](http://www.doxygen.nl/). The Doxygen files are located under the `/api-docs/doxygen` directory and include the `Doxyfile` file and `mainpage.dox` which is the API main page.

Most of the content is organized in Markdown (.md) files which are easy to generate and maintain. The only exceptions are the API reference pages (which are generated using Doxygen) and the Landing Page (`index.html`).

## Contribute

You are more than welcome to contribute to this web-site. You can do that by either opening [issues on GitHub](https://github.com/PcapPlusPlus/pcapplusplus.github.io/issues) or by adding/modifying content and create a PR.

If you don't have a GitHub user you can also contact us by email: <mailto:pcapplusplus@gmail.com>

If you decide to create a PR please make sure you:

- Run the changes locally to make sure they're working. Please refer to the [Getting Started](#getting-started) section to learn how
- Test the changes on different browsers
- Test the changes on both desktop and mobile. You don't really have to run it on a mobile device, each desktop browser offers a mobile view of the page
