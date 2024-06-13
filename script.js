const questions = [
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 1,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXVvt_VySkIAM8P0dUwXsiNWpB9z7F2FG4ileihsQsXxKDsmy0mkbDm8EYH4p_OdnNW6x08AOX9pSmJY94WFb4bCa38rOZ-9jQV6BtqlkzzHNyOFCCc-48i1jyAbhyphenhyphenvl3nOQQYOEHFmL8JnADTaBLGHCYGs04EliV2OEMJ9CjxoY8iwiJtammmsPSAGceg/s1018/KakaoTalk_20240531_152458499.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiApWbTq-9W_SCy7zTWuNjU8XMTgpJngCgcD79gHyy62m417AVaAFQV0gN8qZzFa_XbCZF3R9wFHnSeygwPyx2UOTVSTi7xKcekbwa8ilSJ3RW-TNkW66HjVD5-Djn4Vb9rEAZiOy0tfZd7sCAkKhFHSRm5b9nhmRS8ffLLGaA8G5W4IKx2NYYWGA9ZmcC5/s767/KakaoTalk_20240614_011601783.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 2,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0u5t9z_GYgCDtSvzHo2DfCtxhYwCRrUpkAtpW-XPl4V9U5n5PTGbc9KQlbct6RchBumVunWaa2Sj1UVeRkvYQNEM8nFmNjs5mHJo2Pb61QckSa933S0ZXYdl2Og68v-Xyfte7lBfbGuD66sMpyBK8oCYd0oo0VCbut_oy7ppwHVguse1UxVCfkJpEqs4t/s794/KakaoTalk_20240531_152458499_01.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-ZhLj5ZNJA3EdFRdTjnDTMR_MjBzmBk-9iQxt8x2sG-Dzj3UgPo7tws6vJSLqAlb-Gk5MwSpWHrqXtSgFkvyLla2d1xb9wlzoi6rgHa6ie59Bex9rLYIBI-D3lsBvqMHUCwTeRrkHy59usYTQDmyRFy6vZq3k4dH0UrVpu8UM1RoRrz6gs62oyr0AMbNc/s770/KakaoTalk_20240614_011601783_01.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 3,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNT_rlNwLlDyHInK2MFcKUb1uJXQWCpz32KS1fC5HlOWR-kXpBB1WR94sTZqsOLtTqALEA5lcF3G6wK6Zmy21XvID13fbuDasohM2G-DA7kElqISHH_K6Q2m2V77yWoS470MQAXxjy0mPNVWTFVwkYt_w10hR0WkQt8XKnHbIS9g5RUVTB11zLfVonoOXb/s870/KakaoTalk_20240531_152458499_02.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqCeCra4zhbQyIGC85yQYTB34ZWHhG6psdjAofgaGAMps3jn1WBCucQ-cjL2_hD93zcEwXE0O_hht-Y19dvdJhCd9OQ5SHM0MZ1jvtnsmruw-iGTGQo5rEab2ywGrYz3OyFmr9qpGSg8QZMFJRxEKcS2ggik-mcWskkz2sVBsGMjuM7yKq6Yl_8h38dRQf/s2480/KakaoTalk_20240614_011601783_02.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 4,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTs5MzbIxr5F3SBg6bnNOd8xrD2jhwsWkLTjDbmlSHETq5dqqQ6Zm65Lp94SdlPsGZBrPOC-mfDE1N-IR1VXdn1_4aIuPvMvfY9ovAIreweNhoL5Ye9UPpe-v-PZiFnhjTml4e-iNnPxzV7oO5mK5sI6TZ9pRGJuZGp2dpR69mkMtUatQnFXP7iDkj1PWK/s921/KakaoTalk_20240531_152458499_03.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibMmqJj-6Jop1IZp1j2sQFP5WK83H5hQ15iQRSdp9qJlq1gaR4_JuGlu1ZLI4CqUA29tZGuA2ib9RNVf7zz_P16dFqaSaEQUW3VUZ4-_UPuqLagD_pFDRVZUXnSvDb0vLm7KtCGusjnSnghJeJbnucIFjGU25YZLvhxHMNQcep4qH6Ayy3DUUhszrMN4uF/s761/KakaoTalk_20240614_011601783_03.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 5,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmP9AkAeUzw8OBlmfV44i-8vlwYPRA-AK_Kb8pyJ_0KEZrQeWmgIW2fVbWeK8wS2tdAcNgZmnlpIo5B0W1KRrhpRB50bQX0A7ZGEptWthawDCfJtihiPnluDBGDGFKdaL-V9Y8GrwQmDD3_OyVgO5bPkj14v0ijGGoua9zEFHIgVJMp7Vn6QqrGdipUEu5/s1090/KakaoTalk_20240531_152458499_04.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXa3natR0vVmVeQ2dpaAYNjGwwRAA_hX38auzMk6_evMDg_F-6tEYl9XaEH-QI8yCd_IKrScicuv8k2W4hmM4iGIErCvx7ZS5kpJBE1QOYX7khwioOl2TNGBdkkcQ_quxW3pxl9GadFIBiL2QwDc9X7bxTZ1b2t6FBCCrVUBMYTMWHZYAOAfXpIzHBfc3B/s766/KakaoTalk_20240614_011601783_04.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 6,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh07hakqUVxntfQtcUUftsaFoh0SSE_qJDpGdrICnI7CY2X6MqXwhBrWbTMdb2ENa_b4TEWsa6LGvQTB0Xm7RHLFjb3-H-10k7rePsGKP1_eWi7CnYYJbt5fg_9dOr6zSEGD70xIdbmcbri1sOEeGqgv_6J4fY6Y_pCk4auPO4FTnqXf2m7Gl-iwcVRwATm/s1173/KakaoTalk_20240531_152458499_05.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMQEVNkicIaoXmFRre8_CoC1Ud5TIuibXxnuRpBmPmje_RFSZ3t_P16SKER6qIyQnOBegnppAnoiP9jRLBDOlQNW_tc-GM_RfKLRdSpKAHXWC9UdUVEHLVxB9ftIfyxXTGPGOsN24Wmt8_yg7YFe6mX77f8do9J9LmTUN2qIJXNcWM2RLeCKbVvkCiCqiL/s2800/KakaoTalk_20240614_011601783_05.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 7,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqMyc6a1xPFnQTilHH_iaB2mZWP0i2iT6psOrQdw-NnRK3Z8EQLytHDP6jBU9VDVSmhrNaAO1VBNqOLJAmKm_5u3Z0b-4vKNNcHo5OgQp-s-2pMuyNYts8ssumY40SbUxgQNv6GkIfMTTQcP87zWZo9b8-HC96KAN5ZvYtZyTklEt2sfuIxy6V4NzdksMM/s1148/KakaoTalk_20240531_152458499_06.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizn7aE_zoX3UoLFGzRZt0nLtcHodrMH9stqArnOhrOiZrc8RBhF4TtLRmPbeJ1apyNinjMIDEpEfjTrqd2KLnpWFpidjsqWKibQPrUgfGl6ZhHyLts6mX-wxPdqboP_GDaN7gJnKIklnMpll0zorURNu7-YUvl9Wqob2OuX6WWwUjBfn699a4AmZ-Z2RkA/s768/KakaoTalk_20240614_011601783_06.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 8,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjD_S29J5f9WSyE9kF8CEFTJKLtzxblUkc9OTVAsELPrjVKq_VxnvGtaSEI9qy1V2bEpyOKh4LIXzgKwUObT-8mVBdMCyal3BflZK5VunMpvjoltnFQlKldAF6rHtQSd__T1EU6Cv2AFQj3ReD8DDDTU0uWBdavy5eKGb-qjrvF-3SKtcLZwGyJVP-ulUfQ/s777/KakaoTalk_20240531_152458499_07.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixl8GJMcw1GcwQ1kQR6b6-wTaH-HuRkmuSA4KJ4RUYqb4jTJ0bo2rRS8GAVm6TtXw-Ila6aVfQHmhfPiCIh1YadYflbZeUx-6pVL4SPIxTgC88T8M4SxXLnqfLqFIEaHo5RokHrmM2fBS6inLalim7ZkiLsPWDYyIgxklpfux2KAKA76qah0Bli3IDQTQs/s787/KakaoTalk_20240614_011601783_07.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 9,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv__F_Ms1jvNexq8YDXFAZlYdtlw-I8JcQ-bCyTshSBpboSOuZEe-2sh6kL1XSRlQm2Pr0PfHH9MJVdqujUjsfVFy2OO-02rhcF6FossH2uWejr9vsmHLx33I2yMT_HAi1hIXAX-L9gKqRI0zjsSS5kyPoaFBMu6O9_CXY7ysmskClMES715eV217GyDkL/s432/111.PNG",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3qhK4H2ABmAy0PStsXGKnqvmBwVL8FbGxJiDni1nt9CE8Y6b8zY_znE0DwQ3b4YxSTMh3xJ0Kxo0Hi7dc1ASxlqyQZIhA3npeQfXbJ2XSmcjDOWhiFk7oywEiWM8v7SzuLLPBC4KDmmlsSNFw8v6IEuYLCIuYeZtR4mOcUxJB35H6J9Se9f1UvezLGUSj/s762/KakaoTalk_20240614_011601783_08.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 10,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDTRTAOu92qotEwaOu_mJWy52rWOmPwDxtyVUADWqr7PCUAtW2lMDRhdr6FT5SnvF4ez06WL9HBL6bobZqEK_qVXLwGFBVvWP7SOqp0QXeXsW9uv-A6KEgrbqsnGqUWEZv4GJLZAXO-95q3eVGSWCxvEfPawSMh48KidXRYIbX1Lb10p9ES-UZvyhepcl6/s839/KakaoTalk_20240531_152458499_09.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeyKWJsQXKxZ1Uwg5CiVATwqj7TrpCbPi6o1EhSBxH8qdIXXm90jOwb-Qt1spxpicFRPRSX1KM-jfNMXiCqvPiRBFibWFZ3d13iqQtVZd9gpEB9BwrmBswlEAEDUtAPFdC5_NkZtSEIzeVECtL84MdTb_es-JEvmyOl6Xp_9HJEh45dWRYq5CtcFE26gFW/s771/KakaoTalk_20240614_011601783_09.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 11,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhB6nw-NStPtF26wnRWshDPq5RurQBptEdX3Jabe2HfTcSzOVgxtvPxhZNNRR3lh4RXKjRTOszpQLoJL02b4tdpLbsUh4KJW613fBQMNh7FpyJKQ-Hs4BGLFWmmrx79EDv-ztCpPTy2HZ9nM0RyEMwUu-4kDzv_aRP28mFvKQ124Czx7QQSFwNA9qJjVkQW/s948/KakaoTalk_20240531_152458499_10.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEEB3FAIR_RrgZwE6xUXzAcNENMv-f8dq-2jqxADHougI3y-b1u1l-bFSDdbrD593Wn0Dh2LcBc30mJBszbbqJkWz38BWv8Oa2H3NiiLEhvim3uyW6bu5W9HzsMinUdkVPl4Z4gRAAcRdINd4E1jXTlHVNdCkslJ8GKkKOI7iluNCp-S7UJRQrf6qg1XBR/s804/KakaoTalk_20240614_011601783_10.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 12,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgY9-DLxqBFHsiCxFtFdCnBAeSkCzl00g_L0GKiWhX1eH9BPJiz0wyBRX1lHoHCF9U5RXOhqPKEPPB4i38_UajBoiqjI0REnfbvOFl3ujXlWbbrEtmzloG0vIlwvQsFDNwsQhqMUmwg9z_Rr5EIfTCLXmpoojxxGs8derWF0k1ukeCn60GcG5HEUfPVAoxP/s763/KakaoTalk_20240531_152458499_11.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzSXG5PohRehNlX66iB1SDfGUCsAUMrHH7X_A0MuZqNjRHT2CxwFazI5UD0T-QTUMJehb4orvuoi9P5S1Am2l5-2eMDdw0nJVToshI0_oBWcxnAKRumJVRwmdMy34hQG7bUgDbVqg4bPmhx9xP-_yfkchymSMrv1jCLHUWzuDYIYPBQm6SLOO72RvupfXY/s2484/KakaoTalk_20240614_011601783_11.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 13,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibBeNGIxSqXTusi63t0_ZGDlrScAIF1eRggkPiHXw7uENv4z6gHf2PlzwUaol93_fvQhISjGIAFDYs1Ka1q16O0JcZaOSb9m1JOYoEbS5viXp5jnZR6UqFic5WSrhiT_aHHuYKzHnBjskaGHe0VKxVkEQw-mjk6c_vZPTC9TEabW3ihyphenhyphendUBenRivYCL6Ho/s1028/KakaoTalk_20240531_152458499_12.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwKOGqbsDjjmtQzeP20alKE1lfI-eGcocCupvsmgED87EiPkGwOJ8bWzzy07iSXgLusgLFor7FIEBtyR-uKrjm1qluLWZTB78w-O70NDlXA2HdfqmOfS0zo6vztBd7fJ0McU_eqJmLssdXq9FgNzwNlgJw686LszKovUBtHUcGx7rVIHbjSGgiTTLqfkIz/s772/KakaoTalk_20240614_011601783_12.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 14,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPsNmk_YcJHa2-okJA9wEtEb6_JP7DOQocRAKWkwMhLbshKbSq2Ry-7yJLH-Yp1jj3o_pTPBYdjKxmGkQjMyAgFNBAgHS00zfR7jZxORA9jDn_HZb1DNZtIFI-f8rHcPzOu7fHrV69qGbhXPMX0xJKBB52ZRmPFA8D09GTxXDO2szKlNcL8WYZEIyra03A/s778/KakaoTalk_20240531_152458499_13.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiA3bSs6sXbvO1PRvkyB3V3hhdzoqtNzE85GgWQuFeiskk8EQDuye52v-3tco6LaltsF3ZZVQ9QS2L1WIy7qB5A1ALhBPBubYL43q-zahgnOEoniequLBio31k4PymcrzEBVvsvdXswNGPOvypWGPg6dnIeU_nPEhXPXPKXX5Kt97bnGKkcxf5G9tWCrV8D/s752/KakaoTalk_20240614_011601783_13.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 15,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHDVwjEOc4RD3wj7rPWNGSrR8jextVBtrcvueEBLgz0z6DK-5yy30Xo0xuPQTI27T2_2LH-wI5Tk3CbR5klAZs8eSqj6ka0xoInj3WxYPLPdzc44PV_SAxfbPXQFwdqkpSZKn5wn1gzH79X1t3IiOCY8rzjKuO-DIBmUb1Byv8HgDn8pkJTEWr9IzYjB1/s1142/KakaoTalk_20240531_152458499_14.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7F-PgivOTF-c9qCiKWx0VzPVFzAddJnmqh2QOUU6n4a71HxHuhoO4mHvV9OY_FkoGnNMbm-zaD8I9QPx8H-KIYFp_hUkRp_6VLiiIHZehCO2_8_MptjOwjsFvXZht-DlKta3EB53BWonGPkq7xEVEAUAQgIDtgjakpN-KTUvW-TX4QjkxnP9-xU5NQgX6/s775/KakaoTalk_20240614_011601783_14.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 16,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjuM5yDWkAR7S9tjBdf56_iTsolVcRGc0UeElYPwmsVV2JKlhwfrYG-0QZH530mBlQ_xMJjxlSEuQvgjtE_kCujpo-whAfScz3-O50BAnXSxxvihEjfTKPfve0ODahUoGsqRK4X2mrKVNhSk8WLEuErlQRa4mcnqAybZoWjNfKTL611vwfW-Aj0qGhFW-S/s994/KakaoTalk_20240531_152458499_15.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0KLDJB1h94d2mebTvkMq6AFkrWUr4hPIStBPDki0ei7a3dvuEDo9VFk8OwbKclpA5DzQf6jn4a4E-wKqoGZRWt90lgZZy_U71QpRpeG1pp-NjJz2Zws9pB7N6sbqhYYDTXxilC1y32Mk8BQJMRhORmHfJ9eILVuINxqy8nLMOQOwDpoZmQyh244Dkeoie/s768/KakaoTalk_20240614_011601783_15.jpg",
        selectedAnswer: null
    }
];

const imageContainer = document.getElementById("image-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (confirm("답을 선택하시겠습니까? \n(한번 고른 답은 바꿀 수 없습니다)")) {
    // 현재 질문에 사용자가 선택한 답 기록
    questions[currentQuestionIndex].selectedAnswer = selectedBtn.innerHTML;

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
}

function showScore() {
    resetState();
    questionElement.innerHTML = `${questions.length} 문제 중 ${score} 문제를 맞추셨습니다.`;

    const incorrectQuestions = questions.filter(q => {
        const correctAnswer = q.answers.find(a => a.correct).text;
        return q.selectedAnswer !== null && q.selectedAnswer !== correctAnswer;
    });
    
    const noteElement = document.querySelector(".note");
    if (noteElement) {
        noteElement.style.display = "none";
    }

    if (incorrectQuestions.length > 0) {
        const incorrectList = document.createElement("ul");
        let headerAdded = false;  // '틀린 문제' 헤더가 추가되었는지 확인하는 변수

        incorrectQuestions.forEach((q, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("incorrect-question"); // 클래스 추가

            if (!headerAdded) {
                const incorrectHeader = document.createElement("p");
                incorrectHeader.classList.add("incorrect-header"); // 클래스 추가
                incorrectHeader.innerHTML = "틀린 문제";
                questionElement.appendChild(incorrectHeader);
                headerAdded = true;  // 헤더가 추가되었음을 표시
            }

            listItem.innerHTML = `
                ${q.questionnumber}. ${q.question} <br> 
                <span class="answer-text">당신의 답: ${q.selectedAnswer}</span> <br> 
                <span class="answer-text">정답: ${q.answers.find(a => a.correct).text}</span>
            `;
            incorrectList.appendChild(listItem);
        });
        questionElement.appendChild(incorrectList);
    } else {
        questionElement.innerHTML += "<br> 모든 문제를 맞추셨습니다!";
    }

    nextButton.innerHTML = "다시 풀기";
    nextButton.style.display = "block";

    // 해설 보기 버튼 추가
    const explanationButton = document.createElement("button");
    explanationButton.innerHTML = "해설 보기";
    explanationButton.style.display = "block";
    explanationButton.style.marginTop = "20px";
    explanationButton.addEventListener("click", showExplanationButtons);
    questionElement.appendChild(explanationButton);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        showImage();
    }else{
        showScore();
        imageContainer.innerHTML = "";
    }
}

function showImage(){
    const currentQuestion = questions[currentQuestionIndex];
    const imagePath = currentQuestion.image;

    if (imagePath) {
        const imageElement = document.createElement("img");
        imageElement.src = imagePath;
        imageElement.alt = "Question Image";
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imageElement);
    }else{
        imageContainer.innerHTML = "";
    }
}
showImage();

function showExplanationButtons() {
    // 이미 해설 버튼들이 생성되었는지 확인
    let explanationContainer = document.getElementById("explanation-container");
    if (!explanationContainer) {
        explanationContainer = document.createElement("div");
        explanationContainer.id = "explanation-container";
        explanationContainer.classList.add("explanation-container")


        questions.forEach((question, index) => {
            const button = document.createElement("button");
            button.innerHTML = `${index + 1}번 문제 해설`;
            button.classList.add("btn", "explanation-btn"); // 스타일 추가
            if (question.selectedAnswer === question.answers.find(a => a.correct).text) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.addEventListener("click", () => showExplanationImage(index));
            explanationContainer.appendChild(button);
        });

        questionElement.appendChild(explanationContainer);
    }
}

function showExplanationImage(index) {
    const currentQuestion = questions[index];
    const questionImage = currentQuestion.image;
    const explanationImage = currentQuestion.explanationImage;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    if (questionImage) {
        const questionImgElement = document.createElement("img");
        questionImgElement.src = questionImage;
        questionImgElement.alt = `Question Image for Question ${index + 1}`;
        questionImgElement.classList.add("question-image");
        imageWrapper.appendChild(questionImgElement);
    }
    
    if (explanationImage) {
        const explanationImgElement = document.createElement("img");
        explanationImgElement.src = explanationImage;
        explanationImgElement.alt = `Explanation Image for Question ${index + 1}`;
        explanationImgElement.classList.add("explanation-image");
        imageWrapper.appendChild(explanationImgElement);
    }

    imageContainer.innerHTML = "";  // 기존 이미지 제거
    imageContainer.appendChild(imageWrapper);
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
        showImage();
    }
});


startQuiz();
