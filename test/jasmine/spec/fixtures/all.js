define([], function () {

  var data = {
    "responseHeader": {
      "status": 0,
      "QTime": 52,
      "params": {
        "json.wrf": "callback",
        "facet": "true",
        "indent": "on",
        "facet.mincount": "1",
        "q": "*:*",
        "hl.fl": "name,features",
        "facet.field": "cat",
        "wt": "json",
        "hl": "true"
      }
    },
    "response": {
      "numFound": 21,
      "start": 0,
      "docs": [{
        "id": "GB18030TEST",
        "name": "Test with some GB18030 encoded characters",
        "price": 0.0,
        "price_c": "0,USD",
        "inStock": true,
        "features": [
          "No accents here",
          "这是一个功能",
          "This is a feature (translated)",
          "这份文件是很有光泽",
          "This document is very shiny (translated)"
        ]
      }, {
        "id": "SP2514N",
        "name": "Samsung SpinPoint P120 SP2514N - hard drive - 250 GB - ATA-133",
        "manu": "Samsung Electronics Co. Ltd.",
        "price": 92.0,
        "price_c": "92,USD",
        "popularity": 6,
        "inStock": true,
        "manufacturedate_dt": "2006-02-13T15:26:37Z",
        "store": "35.0752,-97.032",
        "cat": ["electronics", "hard drive"],
        "features": [
          "7200RPM, 8MB cache, IDE Ultra ATA-133",
          "NoiseGuard, SilentSeek technology, Fluid Dynamic Bearing (FDB) motor"
        ]
      }, {
        "id": "6H500F0",
        "name": "Maxtor DiamondMax 11 - hard drive - 500 GB - SATA-300",
        "manu": "Maxtor Corp.",
        "price": 350.0,
        "price_c": "350,USD",
        "popularity": 6,
        "inStock": true,
        "store": "45.17614,-93.87341",
        "manufacturedate_dt": "2006-02-13T15:26:37Z",
        "cat": ["electronics", "hard drive"],
        "features": [
          "SATA 3.0Gb/s, NCQ",
          "8.5ms seek",
          "16MB cache"
        ]
      }, {
        "id": "F8V7067-APL-KIT",
        "name": "Belkin Mobile Power Cord for iPod w/ Dock",
        "manu": "Belkin",
        "weight": 4.0,
        "price": 19.95,
        "price_c": "19.95,USD",
        "popularity": 1,
        "inStock": false,
        "store": "45.17614,-93.87341",
        "manufacturedate_dt": "2005-08-01T16:30:25Z",
        "cat": ["electronics", "connector"],
        "features": [
          "car power adapter, white"
        ]
      }, {
        "id": "IW-02",
        "name": "iPod & iPod Mini USB 2.0 Cable",
        "manu": "Belkin",
        "weight": 2.0,
        "price": 11.5,
        "price_c": "11.50,USD",
        "popularity": 1,
        "inStock": false,
        "store": "37.7752,-122.4232",
        "manufacturedate_dt": "2006-02-14T23:55:59Z",
        "cat": ["electronics", "connector"],
        "features": [
          "car power adapter for iPod, white"
        ]
      }, {
        "id": "MA147LL/A",
        "name": "Apple 60 GB iPod with Video Playback Black",
        "manu": "Apple Computer Inc.",
        "includes": "earbud headphones, USB cable",
        "weight": 5.5,
        "price": 399.0,
        "price_c": "399.00,USD",
        "popularity": 10,
        "inStock": true,
        "store": "37.7752,-100.0232",
        "manufacturedate_dt": "2005-10-12T08:00:00Z",
        "cat": ["electronics", "music"],
        "features": [
          "iTunes, Podcasts, Audiobooks",
          "Stores up to 15,000 songs, 25,000 photos, or 150 hours of video",
          "2.5-inch, 320x240 color TFT LCD display with LED backlight",
          "Up to 20 hours of battery life",
          "Plays AAC, MP3, WAV, AIFF, Audible, Apple Lossless, H.264 video",
          "Notes, Calendar, Phone book, Hold button, Date display, Photo wallet, Built-in games, JPEG photo playback, Upgradeable firmware, USB 2.0 compatibility, Playback speed control, Rechargeable capability, Battery level indication"
        ]
      }, {
        "id": "TWINX2048-3200PRO",
        "name": "CORSAIR  XMS 2GB (2 x 1GB) 184-Pin DDR SDRAM Unbuffered DDR 400 (PC 3200) Dual Channel Kit System Memory - Retail",
        "manu": "Corsair Microsystems Inc.",
        "price": 185.0,
        "price_c": "185,USD",
        "popularity": 5,
        "inStock": true,
        "store": "37.7752,-122.4232",
        "manufacturedate_dt": "2006-02-13T15:26:37Z",
        "payloads": "electronics|6.0 memory|3.0",
        "cat": ["electronics", "memory"],
        "features": [
          "CAS latency 2,\t2-3-3-6 timing, 2.75v, unbuffered, heat-spreader"
        ]
      }, {
        "id": "VS1GB400C3",
        "name": "CORSAIR ValueSelect 1GB 184-Pin DDR SDRAM Unbuffered DDR 400 (PC 3200) System Memory - Retail",
        "manu": "Corsair Microsystems Inc.",
        "price": 74.99,
        "price_c": "74.99,USD",
        "popularity": 7,
        "inStock": true,
        "store": "37.7752,-100.0232",
        "manufacturedate_dt": "2006-02-13T15:26:37Z",
        "payloads": "electronics|4.0 memory|2.0",
        "cat": ["electronics", "memory"]
      }, {
        "id": "VDBDB1A16",
        "name": "A-DATA V-Series 1GB 184-Pin DDR SDRAM Unbuffered DDR 400 (PC 3200) System Memory - OEM",
        "manu": "A-DATA Technology Inc.",
        "popularity": 0,
        "inStock": true,
        "store": "45.17614,-93.87341",
        "manufacturedate_dt": "2006-02-13T15:26:37Z",
        "payloads": "electronics|0.9 memory|0.1",
        "cat": ["electronics", "memory"],
        "features": [
          "CAS latency 3,\t 2.7v"
        ]
      }, {
        "id": "USD",
        "name": "One Dollar",
        "manu": "Bank of America",
        "manu_id_s": "boa",
        "price_c": "1,USD",
        "inStock": true,
        "cat": ["currency"],
        "features": [
          "Coins and notes"
        ]
      }]
    },
    "facet_counts": {
      "facet_queries": {},
      "facet_fields": {
        "cat": [
          "electronics", 14,
          "currency", 4,
          "memory", 3,
          "connector", 2,
          "graphics card", 2,
          "hard drive", 2,
          "monitor", 2,
          "search", 2,
          "software", 2,
          "camera", 1,
          "copier", 1,
          "multifunction printer", 1,
          "music", 1,
          "printer", 1,
          "scanner", 1
        ]
      },
      "facet_dates": {},
      "facet_ranges": {}
    },
    "highlighting": {
      "GB18030TEST": {},
      "SP2514N": {},
      "6H500F0": {},
      "F8V7067-APL-KIT": {},
      "IW-02": {},
      "MA147LL/A": {},
      "TWINX2048-3200PRO": {},
      "VS1GB400C3": {},
      "VDBDB1A16": {},
      "USD": {}
    }
  };

  return data;

});
