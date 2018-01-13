import React, { Component } from 'react';
import './footer.css'



class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="faddress">
          <h4>Tech Arachnid</h4>
          <p>Winnipeg, MB</p>
          <p>R2L 1P5</p>
        </div>
            
        <div className="fcontact">
          <h4>General Inquiries</h4>
          <p><a href="mailto:atecharachnid@gmail.com">atecharachnid@gmail.com</a></p>
          <p><span className="highlight">P</span> 204-406-0401</p> 
        </div>
            
        <div className="fsocial">
          <div className="socialbox">
          <a href="https://www.facebook.com/abflett">
            <svg viewBox="1 271 98 98"  className="squares">
              <path d="m 11.296833,370.28457 c -0.535635,-0.12535 -1.8967049,-0.67487 -3.0245988,-1.22114 -2.749725,-1.33177 -5.3869692,-3.92036 -6.6710273,-6.54795 -1.74907623,-3.57917 -1.64037445,-0.62335 -1.568645,-42.65459 l 0.06462383,-37.86754 0.56792251,-1.51619 C 2.2610765,276.21633 5.972156,272.5512 10.154848,271.10488 l 1.628926,-0.56325 h 38.224882 38.224881 l 1.628926,0.56325 c 4.152461,1.43586 7.424284,4.55935 9.288526,8.86743 l 0.769136,1.77739 0.06504,38.00997 c 0.04603,26.87558 -0.0132,38.38782 -0.202098,39.29991 -1.018914,4.91999 -5.78098,9.8129 -10.831858,11.12947 -1.253922,0.32686 -6.030685,0.3694 -39.05458,0.34792 -22.401246,-0.0146 -38.019984,-0.1167 -38.599802,-0.2524 z m 54.659146,-25.79406 v -16.08115 h 5.363993 c 4.07017,0 5.390549,-0.0736 5.47408,-0.30456 0.123355,-0.34127 1.578927,-11.38989 1.578927,-11.98494 0,-0.33496 -0.745322,-0.38048 -6.229424,-0.38048 h -6.229421 l 0.08179,-5.17763 c 0.07823,-4.95199 0.10832,-5.23074 0.690468,-6.39592 0.449483,-0.89964 0.895221,-1.37758 1.704294,-1.8274 1.044761,-0.58086 1.313169,-0.61282 5.782426,-0.68867 l 4.686809,-0.0796 v -5.67112 -5.67112 l -2.008628,-0.15643 c -3.167954,-0.2468 -9.933254,-0.1854 -11.520137,0.10457 -4.652319,0.85007 -8.481682,3.65693 -10.434003,7.64796 -1.53745,3.14292 -1.663447,3.94102 -1.780144,11.27579 l -0.105636,6.63956 H 47.55362 42.095866 v 6.33499 6.33499 h 5.478089 5.478088 v 16.08115 16.08114 h 6.45197 6.451971 z"/>
            </svg>
          </a>
          </div>

          <div className="socialbox">
          <a href="https://www.linkedin.com/in/abflett/">
            <svg viewBox="1 271 98 98"  className="squares">
              <path d="m 11.922834,370.14523 c -4.2168383,-0.9052 -8.1770998,-3.93652 -10.1488859,-7.7683 -1.87226688,-3.63838 -1.77303662015,-1.29765 -1.77303662015,-41.8265 0,-40.52885 -0.0992302598,-38.18813 1.77303662015,-41.82651 1.9979185,-3.88256 5.952394,-6.87881 10.2705379,-7.78183 2.553239,-0.53395 73.357793,-0.53395 75.911031,0 4.289369,0.897 8.296596,3.93254 10.272837,7.78183 1.869636,3.64164 1.770741,1.30569 1.770741,41.82651 0,40.52082 0.09889,38.18486 -1.770741,41.8265 -1.976241,3.84929 -5.983468,6.88483 -10.272837,7.78184 -2.481722,0.51898 -73.610932,0.50632 -76.032683,-0.0135 z M 31.82515,354.18186 c 0.423257,-0.42304 0.423257,-44.46751 0,-44.89054 -0.416883,-0.41667 -14.327375,-0.41667 -14.744259,0 -0.423257,0.42303 -0.423257,44.4675 0,44.89054 0.416884,0.41666 14.327376,0.41666 14.744259,0 z m 23.649207,-13.93407 0.121652,-14.10428 0.683124,-1.39039 c 1.435052,-2.92081 3.798187,-4.5612 6.853139,-4.75715 4.145472,-0.2659 6.677308,1.66651 7.793085,5.94803 0.301391,1.15652 0.363799,3.67644 0.363799,14.68988 0,10.96376 0.05846,13.34238 0.333548,13.57056 0.236632,0.19628 2.410563,0.25793 7.48162,0.21216 l 7.148061,-0.0645 0.06911,-14.22588 c 0.0739,-15.20284 -0.01528,-16.87635 -1.079786,-20.27235 -0.989003,-3.15507 -2.159922,-5.15752 -4.215435,-7.2091 -2.015026,-2.01118 -3.745583,-3.04487 -6.574188,-3.92686 -1.561099,-0.48677 -2.334576,-0.56888 -5.352701,-0.56816 -3.0684,7.3e-4 -3.749752,0.0759 -5.231049,0.57701 -2.853258,0.96525 -5.295389,2.64848 -6.947066,4.78824 -0.56073,0.72642 -1.115681,1.32078 -1.233226,1.32078 -0.117543,0 -0.213717,-1.25636 -0.213717,-2.79191 0,-2.6936 -0.01927,-2.79661 -0.547435,-2.92552 -0.30109,-0.0735 -3.667817,-0.10292 -7.481617,-0.0654 l -6.934181,0.0682 -0.06276,22.37232 c -0.03452,12.30477 -0.01,22.51071 0.05456,22.67986 0.09178,0.24057 1.721472,0.29353 7.483556,0.24317 l 7.366227,-0.0644 z M 26.642762,302.5462 c 1.303806,-0.20565 3.646686,-1.47596 4.430873,-2.40242 3.065152,-3.62123 2.189686,-9.39537 -1.77676,-11.71865 -2.183292,-1.27882 -4.714635,-1.60365 -7.284202,-0.9347 -3.948801,1.02799 -6.184642,4.11886 -5.89601,8.15076 0.26278,3.67076 2.933378,6.46457 6.706233,7.01561 1.376686,0.20107 1.948953,0.18449 3.819866,-0.1106 z"/>
            </svg>
          </a>
          </div>

          <div className="socialbox">
          <a href="https://twitter.com/abflett">
            <svg viewBox="1 271 98 98"  className="squares">
              <path d="m 11.330082,370.12032 c -3.0459599,-0.80204 -6.0102092,-2.67237 -7.9116074,-4.99194 -1.3729307,-1.67487 -2.83287408,-4.71076 -3.19966113,-6.65356 -0.19717156,-1.04437 -0.25224919,-11.69351 -0.2004677,-38.76027 l 0.07139637,-37.32027 0.54010958,-1.5896 C 2.1907645,276.21074 6.37324,272.25934 10.995388,271.01182 c 1.869198,-0.5045 1.904711,-0.5049 39.51113,-0.44129 l 37.640251,0.0637 1.721829,0.62978 c 3.721871,1.36135 6.799645,4.09141 8.489382,7.53027 1.79712,3.6574 1.6803,0.59012 1.609395,42.26055 l -0.06366,37.42002 -0.533508,1.56001 c -1.566012,4.57914 -5.325861,8.34 -9.903769,9.90643 l -1.559593,0.53365 -37.430237,0.0487 c -35.973342,0.0468 -37.497036,0.031 -39.146514,-0.40325 z m 33.98786,-22.32302 c 5.236111,-0.43618 9.272631,-1.64417 14.895691,-4.45775 3.46354,-1.73304 8.124515,-5.78474 11.16428,-9.7049 4.573978,-5.89874 7.649053,-14.5383 7.816267,-21.96016 l 0.05406,-2.40002 2.557515,-2.52001 c 2.563956,-2.52637 3.537562,-3.7242 3.255981,-4.00586 -0.08295,-0.083 -1.096312,0.12843 -2.251925,0.46979 -2.668779,0.78832 -3.313048,0.9238 -3.500672,0.73612 -0.08313,-0.0832 0.539274,-0.8418 1.383119,-1.68587 1.500381,-1.50078 3.306248,-4.42358 2.952048,-4.77788 -0.09537,-0.0954 -1.010834,0.21416 -2.034377,0.68789 -1.89004,0.87477 -4.823694,1.85576 -5.5497,1.85576 -0.219452,0 -0.936888,-0.44791 -1.594301,-0.99536 -6.483481,-5.39902 -16.50389,-3.1911 -20.129437,4.43538 -1.035695,2.17863 -1.400968,3.99068 -1.305307,6.47538 l 0.07564,1.96468 -0.677662,0.0781 c -1.010643,0.11648 -5.017742,-0.57212 -7.469204,-1.28354 -6.339063,-1.83963 -11.808951,-5.12227 -16.551984,-9.93333 -1.052629,-1.06773 -2.043609,-1.94132 -2.202181,-1.94132 -0.352984,0 -1.232229,2.28734 -1.568355,4.08003 -0.730356,3.89528 0.980595,8.98698 3.909165,11.63348 0.514503,0.46494 0.935461,0.96314 0.935461,1.10708 0,0.34174 -1.641455,0.0742 -3.239155,-0.52806 -1.849898,-0.69725 -1.891021,-0.67377 -1.718086,0.98123 0.458592,4.38876 3.221164,8.16252 7.476584,10.21325 2.530672,1.21956 2.410058,1.43547 -0.798544,1.42944 l -1.998229,-0.004 0.142542,0.71291 c 0.209842,1.04949 1.952265,3.59831 3.270037,4.78342 0.632235,0.56859 1.886025,1.41623 2.786198,1.88365 1.464638,0.76054 2.228093,1.00521 4.755867,1.52421 l 0.719812,0.14779 -0.839781,0.71599 c -1.36658,1.16514 -5.897647,3.26058 -8.517777,3.93913 -1.731945,0.44854 -3.286094,0.65864 -5.587089,0.75531 -2.047266,0.086 -3.157928,0.22331 -3.104458,0.38376 0.273643,0.82115 6.441781,3.43085 10.316539,4.36487 4.273749,1.03019 7.340223,1.24161 12.171408,0.83917 z"/>
            </svg>
          </a>
          </div>

          <div className="socialbox">
          <a href="https://www.youtube.com/channel/UCY7KXLbWeogczYqaCuLmc5w">
            <svg viewBox="1 271 98 98"  className="squares">
              <path d="m 11.9084,370.46027 c -0.26367,-0.0606 -1.20227,-0.38046 -2.0857788,-0.71072 -4.5728022,-1.70933 -8.2117826,-5.77501 -9.41620735,-10.52033 -0.5404391,-2.12928 -0.54257767,-74.8366 -0.002247,-77.1317 0.72811055,-3.09283 2.92612005,-6.44507 5.49303055,-8.37756 1.7528346,-1.31962 2.6286579,-1.77743 4.8127246,-2.51572 l 1.677899,-0.56718 36.847879,-0.0644 c 41.2097,-0.0721 38.652815,-0.17212 42.372895,1.65767 2.843296,1.39852 5.290189,3.85165 6.671909,6.68891 1.845936,3.79047 1.717583,0.6771 1.717583,41.66265 0,35.80077 -0.01236,36.80888 -0.472688,38.61154 -1.24748,4.88495 -4.911321,8.97096 -9.628732,10.73822 l -1.524019,0.57093 -37.992413,0.034 c -20.895828,0.0187 -38.208144,-0.0156 -38.471814,-0.0763 z m 59.402624,-11.19408 c 3.591489,-0.42885 5.088096,-1.03467 6.591628,-2.66827 1.282371,-1.39331 1.845508,-2.55313 2.287874,-4.7121 0.660223,-3.2222 0.871257,-6.65003 0.871257,-14.15165 0,-12.67396 -0.678059,-16.49472 -3.395542,-19.1334 -1.905973,-1.8507 -3.269499,-2.20556 -10.507042,-2.73451 -5.279225,-0.38581 -30.436043,-0.38581 -35.715267,0 -7.385186,0.53974 -8.858267,0.95588 -10.781844,3.04586 -2.442273,2.65355 -3.120743,6.74559 -3.120743,18.82205 0,12.50085 0.760067,16.67235 3.49837,19.20024 1.936751,1.78792 3.23372,2.12715 10.044667,2.62721 1.582019,0.11615 10.588738,0.17976 20.014932,0.14135 13.52808,-0.0551 17.785939,-0.14714 20.21171,-0.43678 z m -34.060123,-8.08957 c -0.934971,-0.87238 -1.02166,-1.92057 -0.95592,-11.5583 l 0.06279,-9.20602 h 1.797749 1.797748 l 0.11985,8.69049 c 0.08553,6.20179 0.200629,8.77131 0.401924,8.97272 0.423223,0.42344 1.490666,0.0589 2.268116,-0.77464 l 0.679433,-0.72844 0.06309,-8.08006 0.06309,-8.08007 h 1.797748 1.797749 v 10.44266 10.44266 h -1.797749 -1.797748 l -0.07511,-0.78019 c -0.08681,-0.90167 -0.492169,-0.99876 -1.14616,-0.27454 -1.243451,1.377 -4.048556,1.89294 -5.076598,0.93373 z m 18.642408,-0.35912 c -0.685671,-0.46212 -1.282602,-0.84021 -1.326515,-0.84021 -0.04391,0 -0.113973,0.29707 -0.155688,0.66017 -0.07522,0.65475 -0.0906,0.66016 -1.873594,0.66016 h -1.797748 l -0.06184,-14.11373 -0.06184,-14.11372 1.859593,0.0701 1.859593,0.0702 0.06545,4.26108 c 0.04203,2.73604 0.154298,4.26109 0.313681,4.26109 0.136523,0 0.670225,-0.33964 1.185998,-0.75475 0.675125,-0.54337 1.264285,-0.78617 2.103548,-0.86694 1.620362,-0.15593 2.581035,0.38273 3.243695,1.81878 0.497652,1.07846 0.518317,1.43431 0.518317,8.92524 0,8.54549 -0.07608,9.11888 -1.352742,10.19474 -0.574315,0.48399 -0.981745,0.60801 -1.99736,0.60801 -1.060875,0 -1.485945,-0.14158 -2.522543,-0.84022 z m 1.189045,-2.75563 c 0.81571,-0.43722 0.968253,-1.57949 0.968253,-7.25044 0,-5.87999 -0.173555,-6.95254 -1.176616,-7.27138 -0.598964,-0.19039 -1.422681,0.0316 -1.999406,0.53877 -0.379881,0.33409 -0.419475,0.97553 -0.419475,6.79593 v 6.42702 l 0.631576,0.49754 c 0.690105,0.54366 1.31727,0.62617 1.995668,0.26256 z m 10.557335,2.81565 c -2.460082,-1.48092 -3.026945,-3.84719 -2.803569,-11.70299 0.140945,-4.95681 0.389265,-6.05598 1.674099,-7.41029 1.097568,-1.15693 2.417648,-1.70149 4.124626,-1.70149 1.69829,0 3.025067,0.53668 4.124035,1.66815 1.219927,1.25602 1.508907,2.4829 1.508907,6.40612 v 3.43813 h -3.689698 c -4.232765,0 -3.983932,-0.14775 -3.974973,2.36023 0.01053,2.94793 0.66901,4.36148 2.031729,4.36148 1.090546,0 1.664915,-0.77957 1.79668,-2.43855 l 0.120919,-1.52246 1.857673,-0.0701 1.85767,-0.0702 v 1.69824 c 0,3.72193 -1.974689,5.76386 -5.574071,5.76386 -1.557701,0 -1.905628,-0.0889 -3.054027,-0.7802 z m 4.74373,-14.15472 c 0.107525,-2.45182 -0.692996,-3.59699 -2.24224,-3.20757 -0.835567,0.21003 -1.280769,1.04439 -1.456682,2.72998 -0.210689,2.01879 0.0084,2.24974 2.048,2.15923 l 1.580247,-0.0701 z m -45.548156,14.63484 c -0.0299,-0.033 -0.110804,-5.51541 -0.179775,-12.18311 l -0.125401,-12.12309 -2.097373,-0.0694 -2.097374,-0.0694 v -1.91114 -1.91115 h 6.591744 6.591744 v 1.92049 1.92049 H 33.52932 c -1.227795,0 -2.099636,0.1103 -2.277148,0.28808 -0.216017,0.21634 -0.28764,3.26483 -0.28764,12.24312 v 11.95505 h -2.037448 c -1.120596,0 -2.061917,-0.027 -2.091821,-0.06 z m 24.300789,-40.05177 c 0.481629,-0.24454 1.198909,-0.83734 1.593956,-1.31732 1.224269,-1.48749 1.365553,-2.45603 1.365553,-9.36125 v -6.259 l -0.722771,-1.41496 c -0.553079,-1.08276 -0.99888,-1.58592 -1.898802,-2.14314 -1.038782,-0.6432 -1.388029,-0.72818 -2.992575,-0.72818 -2.191774,0 -3.364864,0.52014 -4.491096,1.99132 -1.09445,1.42967 -1.280496,2.74017 -1.280496,9.01974 0,6.78449 0.171652,7.61668 1.921614,9.31615 0.801276,0.77816 1.474002,1.1957 2.193794,1.36161 1.32526,0.30547 3.189493,0.10439 4.310823,-0.46497 z m -3.724136,-3.40951 c -0.327485,-0.32798 -0.664148,-0.96319 -0.748141,-1.41159 -0.08399,-0.4484 -0.118108,-3.24728 -0.07581,-6.21974 0.06668,-4.68621 0.133388,-5.49072 0.501902,-6.05331 0.317706,-0.48501 0.620281,-0.64788 1.198499,-0.64514 1.765224,0.008 1.852148,0.36112 1.852148,7.51588 0,5.47058 -0.04395,6.16276 -0.419474,6.60722 -0.691275,0.81818 -1.61591,0.90095 -2.309124,0.20668 z m 13.809073,3.90013 c 0.491279,-0.13664 1.382097,-0.62216 1.979596,-1.07893 0.5975,-0.45677 1.139363,-0.83049 1.20414,-0.83049 0.06478,0 0.119428,0.24306 0.121446,0.54014 0.007,1.02728 0.286123,1.16738 2.174748,1.09158 l 1.776628,-0.0714 V 300.8847 290.32201 l -1.776628,-0.0713 c -1.259333,-0.0506 -1.834053,0.0194 -1.973851,0.24007 -0.108474,0.17125 -0.198879,3.9477 -0.200897,8.3921 l -0.0037,8.08072 -0.717805,0.6049 c -1.006168,0.84792 -1.65033,1.00988 -2.125396,0.53441 -0.346889,-0.34719 -0.400742,-1.41636 -0.461235,-9.15695 l -0.06849,-8.76385 -1.849109,0.07 -1.849109,0.0699 -0.07145,8.76223 c -0.0393,4.81923 -0.0044,9.3305 0.07748,10.02503 0.213019,1.80618 1.016385,2.69309 2.630667,2.90425 0.131835,0.0172 0.641655,-0.0804 1.132934,-0.2171 z m -23.784563,-5.96745 v -5.73844 l 2.527153,-8.34517 c 1.389933,-4.58985 2.471966,-8.4892 2.404519,-8.66522 -0.1338,-0.34921 -3.380177,-0.46307 -3.886782,-0.13634 -0.150404,0.097 -0.828901,2.33693 -1.507772,4.9776 -1.482617,5.76709 -1.409818,5.54237 -1.700998,5.25074 -0.126813,-0.127 -0.82775,-2.43635 -1.557643,-5.13188 -0.729891,-2.69554 -1.458554,-4.98464 -1.619249,-5.0869 -0.404148,-0.25718 -3.949183,-0.24196 -4.109387,0.0176 -0.07159,0.116 0.685685,2.57363 1.68283,5.46139 0.997143,2.88776 2.181929,6.59223 2.63286,8.23215 l 0.819873,2.98166 v 5.80057 c 0,3.19031 0.07191,5.87259 0.159801,5.96061 0.08789,0.088 1.058673,0.16004 2.157298,0.16004 h 1.997497 z"/>
            </svg>
          </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
