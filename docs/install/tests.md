---
layout: page
title: Running tests
parent: Installation
permalink: /docs/install/build-source/tests
nav_order: 7
---

# Running PcapPlusPlus Tests
{: .no_toc }

PcapPlusPlus source code contains a set of test-cases you can run to make sure that everything works correctly on your system.

These test-cases are divided into two separate projects:

- `[PCAPPPLUSPLUS_HOME]/Tests/Packet++Test` - contains test-cases for the `Packet++` library
- `[PCAPPPLUSPLUS_HOME]/Tests/Pcap++Test` - contains test-cases (mostly) for the `Pcap++` library

When you build PcapPlusPlus these two projects are also being built. The following sections contain information on how to run the test-cases:

1. TOC
{:toc}

## Packet++Test

This project contains test-cases mostly for the `Packet++` library, meaning testing the functionality of parsing and crafting packets of different protocols.

After a successful build you can run the test-cases following these simple steps:

{% include alert.html alert-type="notice" content="The steps below are showing Linux but apply in the same way to all supported operating systems" %}

- Go to `Packet++Test` directory:

  ```shell
  seladb@seladb:~/PcapPlusPlus$ cd Tests/Packet++Test/
  seladb@seladb:~/PcapPlusPlus/Tests/Packet++Test$
  ```

- Run the tests from this directory. The executable is inside the `Bin` directory:

  ```shell
  seladb@seladb:~/PcapPlusPlus/Tests/Packet++Test$ Bin/Packet++Test 
  PcapPlusPlus version: {{ site.pcapplusplus_ver }} (official release)
  Built: MMM DD YYYY 02:36:16
  Built from: Git branch 'master', commit '8b2d721fdaaa6af516494d96f032e10264d7bf56'
  Start running tests...

  EthPacketCreation             : PASSED
  EthPacketPointerCreation      : PASSED
  EthAndArpPacketParsing        : PASSED
  ArpPacketCreation             : PASSED
  VlanParseAndCreation          : PASSED
  Ipv4PacketCreation            : PASSED
  ...
  ...
  ...
  ALL TESTS PASSED!!
  ```

- Hopefully if all tests pass you'll see a message at the end saying `ALL TESTS PASSED!!`. You'll also see next to each test whether it has passed or failed.

- If a test-case failed you'll see an appropriate assert message explaining what caused the failure, for example:

  ```shell
  seladb@seladb:~/PcapPlusPlus/Tests/Packet++Test$ Bin/Packet++Test 
  PcapPlusPlus version: {{ site.pcapplusplus_ver }} (official release)
  Built: MMM DD YYYY 02:44:35
  Built from: Git branch 'master', commit '8b2d721fdaaa6af516494d96f032e10264d7bf56'
  Start running tests...

  EthPacketCreation             : PASSED
  EthPacketPointerCreation      : PASSED
  EthAndArpPacketParsing        : PASSED
  ArpPacketCreation             : FAILED (line: 245). assert equal failed: actual: 42 != expected: 43
  VlanParseAndCreation          : PASSED
  Ipv4PacketCreation            : PASSED
  ...
  ...
  ...
  NOT ALL TESTS PASSED!!
  ```

- Please note that it's very important to run the tests from the `Tests/Packet++Test` directory (using `Bin/Packet++Test`) because the test-cases are using packet examples that reside in [Tests/Packet++Test/PacketExamples](https://github.com/seladb/PcapPlusPlus/tree/master/Tests/Packet%2B%2BTest/PacketExamples) and are assuming the running directory is `Tests/Packet++Test`


### Some more technical details

- All test-cases are currently gathered in one file: [Tests/Packet++Test/main.cpp](https://github.com/seladb/PcapPlusPlus/blob/master/Tests/Packet%2B%2BTest/main.cpp). Inside this file you will see a separate method for each test-case. For example:

  ```cpp
  PTF_TEST_CASE(GtpLayerEditTest)
  {
      ...
      ...
  }
  ```

- In addition to the functional tests described in each test-case there is also a memory leak test that is being performed for each test-case separately. The [MemPlumber](https://github.com/seladb/MemPlumber) library is being used to detect memory leaks. If a memory leak is detected the test-case will fail with an appropriate assert message

- Each test-case has one or more tags assigned to it. The tags are defined when calling each test-case. For example: `PTF_RUN_TEST(EthPacketCreation, "eth")` has the tag "eth" assigned to it, while `PTF_RUN_TEST(SipResponseLayerCreationTest, "sip")` has the "sip" tag assigned to it. In addition there is a default tag assigned to each test-case which is its name. This mechanism allows running specific tests instead of always run all of them. There is a command-line switch __`-t`__ or __`--tags`__ which enables running only tests that are assigned to specific tags. You should provide it a list of tags (one or more) separated by a semicolon and surrounded by apostrophes.

  For example, the following command will run only tests that have the "`eth`" tag assigned to them:

  ```shell
  seladb@seladb:~/PcapPlusPlus/Tests/Packet++Test$ Bin/Packet++Test -t "eth"
  PcapPlusPlus version: {{ site.pcapplusplus_ver }} (official release)
  Built: MMM DD YYYY 03:19:34
  Built from: Git branch 'master', commit '8b2d721fdaaa6af516494d96f032e10264d7bf56'
  Start running tests...

  EthPacketCreation             : PASSED
  EthPacketPointerCreation      : PASSED
  EthAndArpPacketParsing        : PASSED
  ArpPacketCreation             : SKIPPED (tags dont match)
  VlanParseAndCreation          : SKIPPED (tags dont match)
  Ipv4PacketCreation            : SKIPPED (tags dont match)
  Ipv4PacketParsing             : SKIPPED (tags dont match)
  ...
  ...
  ```

  This command will run only test-cases which have "`eth`" or "`ipv6`" tags assigned to them:

  ```shell
  seladb@seladb:~/PcapPlusPlus/Tests/Packet++Test$ Bin/Packet++Test -t "eth;ipv6"
  PcapPlusPlus version: {{ site.pcapplusplus_ver }} (official release)
  Built: MMM DD YYYY 03:19:34
  Built from: Git branch 'master', commit '8b2d721fdaaa6af516494d96f032e10264d7bf56'
  Start running tests...

  EthPacketCreation             : PASSED
  EthPacketPointerCreation      : PASSED
  EthAndArpPacketParsing        : PASSED
  ArpPacketCreation             : SKIPPED (tags dont match)
  VlanParseAndCreation          : SKIPPED (tags dont match)
  Ipv4PacketCreation            : SKIPPED (tags dont match)
  Ipv4PacketParsing             : SKIPPED (tags dont match)
  Ipv4FragmentationTest         : SKIPPED (tags dont match)
  Ipv4OptionsParsingTest        : SKIPPED (tags dont match)
  Ipv4OptionsEditTest           : SKIPPED (tags dont match)
  Ipv4UdpChecksum               : SKIPPED (tags dont match)
  Ipv6UdpPacketParseAndCreate   : PASSED
  Ipv6ExtensionsTest            : PASSED
  TcpPacketNoOptionsParsing     : SKIPPED (tags dont match)
  TcpPacketWithOptionsParsing   : SKIPPED (tags dont match)
  ...
  ...
  ```

  This command will run only the "`ArpPacketCreation`" test-case:

  ```shell
  seladb@seladb:~/PcapPlusPlus/Tests/Packet++Test$ Bin/Packet++Test -t "ArpPacketCreation"
  PcapPlusPlus version: {{ site.pcapplusplus_ver }} (official release)
  Built: MMM DD YYYY 03:19:34
  Built from: Git branch 'master', commit '8b2d721fdaaa6af516494d96f032e10264d7bf56'
  Start running tests...

  EthPacketCreation             : SKIPPED (tags dont match)
  EthPacketPointerCreation      : SKIPPED (tags dont match)
  EthAndArpPacketParsing        : SKIPPED (tags dont match)
  ArpPacketCreation             : PASSED
  VlanParseAndCreation          : SKIPPED (tags dont match)
  Ipv4PacketCreation            : SKIPPED (tags dont match)
  ...
  ...
  ```

- Here are all of the command-line switches available for `Packet++Test`:

  | __`-t`__, __`--tags`__                | Run only test-cases that match specific tags. The tag list should be separated by semicolons and surrounded by apostrophes, for example: `Bin/Packet++Test -t "eth;ipv4;ArpPacketCreation"` |
  | __`-m`__, __`--mem-verbose`__         | Output verbose information on all memory allocations and releases done throughout the test-cases. This can be useful to detect memory leaks |
  | __`-s`__, __`--skip-mem-leak-check`__ | Skip memory leak test for all test-cases |


## Pcap++Test

This project contains test-cases mostly for the `Pcap++` library, meaning testing the functionality of capturing and sending network packets, reading and writing to files, DPDK functionality, PF_RING and more. It also contains tests for massive packet parsing, TCP reassembly and IP de/fragmentation.

After a successful build you can run the test-cases following these simple steps:

{% include alert.html alert-type="notice" content="The steps below are showing Linux but apply in the same way to all supported operating systems" %}

- Make sure that network traffic is flowing to the device you're running the tests on. This is important because some of the test-cases assume that packets are incoming to the device. There is also an option to run only the tests that don't rely on live traffic using the `-n` or `--no-networking` command-line switch

- Go to `Pcap++Test` directory:

  ```shell
  seladb@seladb:~/PcapPlusPlus$ cd Tests/Pcap++Test/
  seladb@seladb:~/PcapPlusPlus/Tests/Pcap++Test$
  ```

- Run the tests from this directory. The executable is inside the `Bin` directory. If you're running with live traffic there is a mandatory command-line switch you need to provide "`-i`" or "`--use-ip`" which is the IPv4 address of the interface you'd like the test suite to use for capturing and sending network traffic. Make sure that network traffic is flowing to that interface:

  ```shell
  seladb@seladb:~/PcapPlusPlus/Tests/Pcap++Test$ sudo Bin/Pcap++Test -i 10.0.0.1
  PcapPlusPlus version: {{ site.pcapplusplus_ver }} (official release)
  Built: MMM DD YYYY 02:36:38
  Git info: Git branch 'master', commit '8b2d721fdaaa6af516494d96f032e10264d7bf56'
  Using ip: 10.0.0.1
  Debug mode: off
  Starting tests...
  Start running tests...

  TestIPAddress                 : PASSED
  TestMacAddress                : PASSED
  TestPcapFileReadWrite         : PASSED
  TestPcapSllFileReadWrite      : PASSED
  TestPcapRawIPFileReadWrite    : PASSED
  ...
  ...
  ALL TESTS PASSED!!
  ```

- Notice that on Linux you might need to run it with `sudo`

- Hopefully if all test cases pass you'll see a message at the end saying `ALL TESTS PASSED!!`. You'll also see next to each test whether it has passed or failed.

- If a test-case failed you'll see an appropriate assert message explaining what caused the failure, for example:

  ```shell
  seladb@seladb:~/PcapPlusPlus/Tests/Pcap++Test$ sudo Bin/Pcap++Test -i 10.1.1.1
  PcapPlusPlus version: {{ site.pcapplusplus_ver }} (official release)
  Built: MMM DD YYYY 02:36:38
  Git info: Git branch 'master', commit '8b2d721fdaaa6af516494d96f032e10264d7bf56'
  Using ip: 10.1.1.1
  Debug mode: off
  Starting tests...
  Start running tests...

  TestIPAddress                 : PASSED
  TestMacAddress                : PASSED
  TestPcapFileReadWrite         : PASSED
  ..
  ..
  TestPcapLiveDeviceList        : PASSED
  TestPcapLiveDeviceListSearch  : FAILED. assertion failed: Device used in this test 10.1.1.1 doesnt exist
  ..
  ..
  ```

- Please note that it's very important to run the tests from the `Tests/Pcap++Test` directory (using `Bin/Pcap++Test`) because the test-cases are using packet examples that reside in [Tests/Pcap++Test/PcapExamples](https://github.com/seladb/PcapPlusPlus/tree/master/Tests/Pcap%2B%2BTest/PcapExamples) and are assuming the running directory is `Tests/Pcap++Test`

- If you're building PcapPlusPlus with DPDK there is an additional mandatory command-line parameter which is "`-k`" or "`--dpdk-port`" where you need to provide the DPDK port to use for the tests. This port is simply a number starting from 0, so if you have only one interface assigned to DPDK the port number will be 0. If you have two interfaces assigned to DPDK then you can choose either 0 or 1, and so on. Please make sure there is network traffic flowing to this interface


### Some more technical details

- All test-cases are currently gathered in one file: [Tests/Pcap++Test/main.cpp](https://github.com/seladb/PcapPlusPlus/blob/master/Tests/Pcap%2B%2BTest/main.cpp). Inside this file you will see a separate method for each test-case. For example:

  ```cpp
  PTF_TEST_CASE(TestRawSockets)
  {
      ...
      ...
  }
  ```

- In addition to the functional tests described in each test-case there is also a memory leak test that is being performed for each test-case separately. The [MemPlumber](https://github.com/seladb/MemPlumber) library is being used to detect memory leaks. If a memory leak is detected the test-case will fail with an appropriate assert message

- There is a tag mechanism which is similar to the one implemented in `Packet++Test`. Please refer to [the section](#some-more-technical-details) to learn more about this functionality

- Here are all of the command-line switches available for `Pcap++Test`:

  | __`-i`__, __`--use-ip`__              | IPv4 address to use for sending and receiving packets. It's a mandatory parameter when running the tests with live network traffic |
  | __`-d`__, __`--debug-mode`__          | Set log level to DEBUG for all test-cases |
  | __`-r`__, __`--remote-ip`__	          | IPv4 address of remote machine running rpcapd to test remote capture (currently relevant only for Windows). If not provided then the IPv4 address provided in `--i` switch will be used |
  | __`-p`__, __`--remote-port`__         | Port of remote machine running rpcapd to test remote capture. If not provided the default port is `12321` |
  | __`-k`__, __`--dpdk-port`__           | The DPDK NIC port to use. Required if compiling with DPDK |
  | __`-n`__, __`--no-networking`__       | Do not run tests that requires networking |
  | __`-v`__, __`--verbose`__             | Run in verbose mode (emits more output for several test cases) |
  | __`-m`__, __`--mem-verbose`__         | Output verbose information on all memory allocations and releases done throughout the test-cases. This can be useful to detect memory leaks |
  | __`-s`__, __`--skip-mem-leak-check`__ |Skip memory leak test for all test-cases |
  | __`-a`__, __`--kni-ip`__              | IPv4 address for KNI device tests to use. Relevant only if compiling with DPDK. Must not be the same as any of existing network interfaces in your system. If this parameter is omitted KNI tests will be skipped. Relevant for Linux systems only |
  | __`-t`__, __`--tags`__                | Run only test-cases that match specific tags. The tag list should be separated by semicolons and surrounded by apostrophes, for example: `Bin/Pcap++Test -t "live_device;pf_ring;TestDpdkDevice"` |
