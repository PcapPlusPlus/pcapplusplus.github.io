---
layout: page
title: Benchmarks
permalink: /docs/benchmark
nav_order: 8
---

# Benchmarks
{: .no_toc }

{% assign tcp_no_options_pcapplusplus_sec = 0.219 %}
{% assign tcp_no_options_libtins_sec = 0.241 %}
{% assign tcp_no_options_libcrafter_sec = 6.26 %}
{% assign tcp_no_options_libpcap_sec = 0.12 %}

{% assign tcp_no_options_pcapplusplus_pps = 2283105 %}
{% assign tcp_no_options_libtins_pps = 2074688 %}
{% assign tcp_no_options_libcrafter_pps = 79872 %}
{% assign tcp_no_options_libpcap_pps = 4166666 %}

{% assign tcp_with_options_pcapplusplus_sec = 0.218 %}
{% assign tcp_with_options_libtins_sec = 0.288 %}
{% assign tcp_with_options_libcrafter_sec = 10.569 %}
{% assign tcp_with_options_libpcap_sec = 0.12 %}

{% assign tcp_with_options_pcapplusplus_pps = 2293577 %}
{% assign tcp_with_options_libtins_pps = 1736111 %}
{% assign tcp_with_options_libcrafter_pps = 47308 %}
{% assign tcp_with_options_libpcap_pps = 4166666 %}

{% assign dns_pcapplusplus_sec = 0.234 %}
{% assign dns_libtins_sec = 0.245 %}
{% assign dns_libcrafter_sec = 6.791 %}
{% assign dns_libpcap_sec = 0.028 %}

{% assign dns_pcapplusplus_pps = 2136752 %}
{% assign dns_libtins_pps = 2040816 %}
{% assign dns_libcrafter_pps = 73626 %}
{% assign dns_libpcap_pps = 17857142 %}

<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
    google.load('visualization', '1.0', {'packages':['corechart']});
    google.setOnLoadCallback(draw_charts);

    function find_upper_bound(input) {
        maximum = 0;
        for(i = 0; i < input.length; ++i) {
            if(input[i][0] != "scapy" && input[i][1] > maximum) {
                maximum = input[i][1];
            }
        }
        return maximum * 1.05;
    }

    function convert_to_seconds(input) {
        for(i = 0; i < input.length; ++i) {
            input[i][1] = (input[i][1] / 1000);
        }
        return input;
    }

    function draw_graphic(name, output_div, input) {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Library');
        data.addColumn('number', 'Seconds');
        input.sort(
            function(a, b) {
                return a[1] > b[1];
            }
        );
        data.addRows(input);

        // Set chart options
        var options = {
            'title' : name,
            'width' : 650,
            'height' : 450,
            'left' : 0,
            chartArea: {
                left : 0
            },
            vAxis: {
                viewWindowMode: 'explicit',
                viewWindow:{
                    max:find_upper_bound(input),
                    min:0
                }
            },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(
            document.getElementById(output_div)
        );
        chart.draw(data, options);
    }

    function draw_charts() {
        draw_graphic('Graphic view', 'tcp_no_options', [['libcrafter', {{ tcp_no_options_libcrafter_sec }}],['PcapPlusPlus', {{ tcp_no_options_pcapplusplus_sec }}],['libtins', {{ tcp_no_options_libtins_sec }}],['libpcap', {{ tcp_no_options_libpcap_sec }}]]);
        draw_graphic('Graphic view', 'tcp_with_options', [['libcrafter', {{ tcp_with_options_libcrafter_sec }}],['PcapPlusPlus', {{ tcp_with_options_pcapplusplus_sec }}],['libtins', {{ tcp_with_options_libtins_sec }}],['libpcap', {{ tcp_with_options_libpcap_sec }}]]);
        draw_graphic('Graphic view', 'dns', [['libcrafter', {{ dns_libcrafter_sec }}],['PcapPlusPlus', {{ dns_pcapplusplus_sec }}],['libtins', {{ dns_libtins_sec }}],['libpcap', {{ dns_libpcap_sec }}]]);
    }
</script>

In order to benchmark the performance of PcapPlusPlus and compare it with similar C++ libraries we used [Matias Fontanini's packet-capture-benchmarks project](https://github.com/mfontanini/packet-capture-benchmarks). The benchmark compared PcapPlusPlus, [libtins](http://libtins.github.io/), [libcrafter](https://github.com/pellegre/libcrafter) and libpcap.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Tested projects

PcapPlusPlus was only compared to similar C/C++ projects such as [libtins](http://libtins.github.io/) and [libcrafter](https://github.com/pellegre/libcrafter) because projects written higher level languages (such as Python or Java) cannot compete with the performance of native libraries. The following versions were used for the benchmarks:

- libpcap-dev [v0.8.1](https://www.tcpdump.org/#old-releases)
- PcapPlusPlus [v19.04](https://github.com/seladb/PcapPlusPlus/releases/tag/v19.04)
- libtins [v4.2](https://github.com/mfontanini/libtins/releases/tag/v4.2)
- libcrafter - commit [#3db70ab](https://github.com/pellegre/libcrafter/tree/3db70ab6fd62ade25de7328aaf8e9ba92696c92e)

## Testing environment

All 3 benchmarks provided in [packet-capture-benchmarks](https://github.com/mfontanini/packet-capture-benchmarks) were run on the following environment:

- Linux Ubuntu 16.04 64-bit running as a VirtualBox VM with 4 virtual cores and 8GB RAM
- GCC 5.4.0 compiler
- The host platform is a MacBook Pro model 2017 with Intel Core i7 760 3.1GHz processor and 16GB RAM running MacOS High Sierra 10.13

Benchmark applications:
- The PcapPlusPlus benchmark application can be found in [PcapPlusPlus examples]({{ site.baseurl }}/docs/examples#pcapplusplus-benchmark)
- The other benchmark applications can be found in [Matias Fontanini's packet-capture-benchmarks project](https://github.com/mfontanini/packet-capture-benchmarks)

## Test results

### Benchmark #1 - TCP parsing

{% include alert.html alert-type="tip" content="PcapPlusPlus is ~10% faster than libtins and ~x28 faster than libcrafter" %}

| Library      | Time taken(seconds) | Packets per second |
|---------------------------------------------------------|
| libpcap      | {{ tcp_no_options_libpcap_sec }} | {{ tcp_no_options_libpcap_pps }} |
| __PcapPlusPlus__ | __{{ tcp_no_options_pcapplusplus_sec }}__ | __{{ tcp_no_options_pcapplusplus_pps }}__ |
| libtins      | {{ tcp_no_options_libtins_sec }} | {{ tcp_no_options_libtins_pps }} |
| libcrafter   | {{ tcp_no_options_libcrafter_sec }} | {{ tcp_no_options_libcrafter_pps }} |

<div id="tcp_no_options"></div>

### Benchmark #2 - TCP + TCP Options parsing

{% include alert.html alert-type="tip" content="PcapPlusPlus is ~32% faster than libtins and ~x48 faster than libcrafter" %}

| Library      | Time taken(seconds) | Packets per second |
|---------------------------------------------------------|
| libpcap      | {{ tcp_with_options_libpcap_sec }} | {{ tcp_with_options_libpcap_pps }} |
| __PcapPlusPlus__ | __{{ tcp_with_options_pcapplusplus_sec }}__ | __{{ tcp_with_options_pcapplusplus_pps }}__ |
| libtins      | {{ tcp_with_options_libtins_sec }} | {{ tcp_with_options_libtins_pps }} |
| libcrafter   | {{ tcp_with_options_libcrafter_sec }} | {{ tcp_with_options_libcrafter_pps }} |

<div id="tcp_with_options"></div>

### Benchmark #3 - DNS parsing

{% include alert.html alert-type="tip" content="PcapPlusPlus is ~5% faster than libtins and ~x29 faster than libcrafter" %}

| Library      | Time taken(seconds) | Packets per second |
|---------------------------------------------------------|
| libpcap      | {{ dns_libpcap_sec }} | {{ dns_libpcap_pps }} |
| __PcapPlusPlus__ | __{{ dns_pcapplusplus_sec }}__ | __{{ dns_pcapplusplus_pps }}__ |
| libtins      | {{ dns_libtins_sec }} | {{ dns_libtins_pps }} |
| libcrafter   | {{ dns_libcrafter_sec }} | {{ dns_libcrafter_pps }} |

<div id="dns"></div>
