---
layout: page
title: Benchmarks
permalink: /docs/benchmark
nav_order: 7
---

# Benchmarks
{: .no_toc }

{% assign tcp_no_options_pcapplusplus_sec = 180000 %}
{% assign tcp_no_options_libtins_sec = 180000 %}
{% assign tcp_no_options_libcrafter_sec = 180000 %}
{% assign tcp_no_options_libpcap_sec = 180000 %}

{% assign tcp_no_options_pcapplusplus_pps = 180000 %}
{% assign tcp_no_options_libtins_pps = 180000 %}
{% assign tcp_no_options_libcrafter_pps = 180000 %}
{% assign tcp_no_options_libpcap_pps = 180000 %}

{% assign tcp_with_options_pcapplusplus_sec = 180000 %}
{% assign tcp_with_options_libtins_sec = 180000 %}
{% assign tcp_with_options_libcrafter_sec = 180000 %}
{% assign tcp_with_options_libpcap_sec = 180000 %}

{% assign tcp_with_options_pcapplusplus_pps = 180000 %}
{% assign tcp_with_options_libtins_pps = 180000 %}
{% assign tcp_with_options_libcrafter_pps = 180000 %}
{% assign tcp_with_options_libpcap_pps = 180000 %}

{% assign dns_pcapplusplus_sec = 180000 %}
{% assign dns_libtins_sec = 180000 %}
{% assign dns_libcrafter_sec = 180000 %}
{% assign dns_libpcap_sec = 180000 %}

{% assign dns_pcapplusplus_pps = 180000 %}
{% assign dns_libtins_pps = 180000 %}
{% assign dns_libcrafter_pps = 180000 %}
{% assign dns_libpcap_pps = 180000 %}

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
        data.addRows(convert_to_seconds(input));

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

[Matias Fontanini's packet-capture-benchmarks project](https://github.com/mfontanini/packet-capture-benchmarks) was used to compare the performance of PcapPlusPlus with other similar C++ libraries (libtins and libcrafter).

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Tested projects

PcapPlusPlus was only compared to similar C/C++ projects such as libtins and libcrafter because projects written higher level languages (such as Python or Java) cannot compete with the performance of native libraries. Here are the versions used for the benchmarks:

- libpcap 1.8.1
- PcapPlusPlus - commit f6e04a7
- libtins - commit f4635a6
- libcrafter - commit 3db70ab

## Testing environment

All 3 benchmarks provided in packet-capture-benchmarks were run on the following environment:

- Linux Ubuntu 16.04 64-bit running as a VirtualBox VM
- Compiler is GCC 5.4.0
- Host platform is a dual-core Intel Core i5 760 2.8GHz with 8GB RAM system running Windows 10 64-bit

The benchmark application can be found in [PcapPlusPlus examples](/docs/examples#pcapplusplus-benchmark).

## Test results

### Benchmark #1 - TCP parsing

__PcapPlusPlus is ~35% faster than libtins and ~x72 faster than libcrafter__
{: .label .label-green }

| Library      | Time taken(seconds) | Packets per second |
|---------------------------------------------------------|
| libpcap      | {{ tcp_no_options_libpcap_sec | divided_by: 1000 }} | {{ tcp_no_options_libpcap_pps }} |
| PcapPlusPlus | {{ tcp_no_options_pcapplusplus_sec | divided_by: 1000 }} | {{ tcp_no_options_pcapplusplus_pps }} |
| libtins      | {{ tcp_no_options_libtins_sec | divided_by: 1000 }} | {{ tcp_no_options_libtins_pps }} |
| libcrafter   | {{ tcp_no_options_libcrafter_sec | divided_by: 1000 }} | {{ tcp_no_options_libcrafter_pps }} |

<div id="tcp_no_options"></div>

### Benchmark #2 - TCP + TCP Options parsing

__PcapPlusPlus is ~35% faster than libtins and ~x72 faster than libcrafter__
{: .label .label-green }

| Library      | Time taken(seconds) | Packets per second |
|---------------------------------------------------------|
| libpcap      | {{ tcp_with_options_libpcap_sec | divided_by: 1000 }} | {{ tcp_with_options_libpcap_pps }} |
| PcapPlusPlus | {{ tcp_with_options_pcapplusplus_sec | divided_by: 1000 }} | {{ tcp_with_options_pcapplusplus_pps }} |
| libtins      | {{ tcp_with_options_libtins_sec | divided_by: 1000 }} | {{ tcp_with_options_libtins_pps }} |
| libcrafter   | {{ tcp_with_options_libcrafter_sec | divided_by: 1000 }} | {{ tcp_with_options_libcrafter_pps }} |

<div id="tcp_with_options"></div>

### Benchmark #3 - DNS parsing

__PcapPlusPlus is ~35% faster than libtins and ~x72 faster than libcrafter__
{: .label .label-green }

| Library      | Time taken(seconds) | Packets per second |
|---------------------------------------------------------|
| libpcap      | {{ dns_libpcap_sec | divided_by: 1000 }} | {{ dns_libpcap_pps }} |
| PcapPlusPlus | {{ dns_pcapplusplus_sec | divided_by: 1000 }} | {{ dns_pcapplusplus_pps }} |
| libtins      | {{ dns_libtins_sec | divided_by: 1000 }} | {{ dns_libtins_pps }} |
| libcrafter   | {{ dns_libcrafter_sec | divided_by: 1000 }} | {{ dns_libcrafter_pps }} |

<div id="dns"></div>
