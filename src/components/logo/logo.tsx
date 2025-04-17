import React from 'react';
import './logo.scss';
import timeService from "../../services/timeService";

export function Logo() {
    return (
        <div className="w-full d-none d-md-flex align-items-center justify-content-center">
            <div className="custom-width logo-wrapper">
                <div className="logo-width">
                    <img alt="journal logo"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX8AAABMCAYAAACF3bfQAAAOOklEQVR4Xu2dd5PbOAzFld57z6b3nky+/0fITHrvvffeb36eo4/Lk0VQ1tL0+nEmf9wtRRIP0iMIgPCcM2fO/K3UhIAQEAJCYKIQmCPynyh9S1ghIASEQA8Bkb9eBCEgBITABCIg8p9ApUtkISAEhIDIX++AEBACQmACERD5T6DSJbIQEAJCQOSvd0AICAEhMIEIiPwnUOkSWQgIASEg8tc7IASEgBCYQARE/hOodIksBISAEBD56x0QAkJACEwgAiL/CVS6RBYCQkAIiPz1DggBISAEJhABkf8EKl0iCwEhIARE/noHhIAQEAITiIDIfwKVLpGFgBAQAiJ/vQNCQAgIgQlEQOQ/pkqfM2dOtXjx4mrRokXVwoULq7lz5/Yk+f37d/Xjx4/qy5cv1c+fPzuTbsmSJRX/5s+fX82bN683z69fv3rzfPv2bah5cssy1GIn8GH0s3Tp0r7++W/0//379+rr16+9901t/BAQ+Y+RzlauXFmtWrWqWr58ee9D5CNsanyYL1++rF69elX9/Zv+g20Q/aZNm6r169f3SH9Q4+NnjufPn1d//vwxIZpbFtOiCux0+vTpqJ4ty/78+XN17do1S9d+nwULFlSbN2+u1q1b19vwBzU2gXfv3vX036XBkbRYdU5GQOSfDNnoHjhy5EiP9FMbm8Ddu3d7Vpq1Qc67du2qIABrgwTu3LnTOw3EWk5ZYmsp+e9dkf+nT5+q69evm0XdsGFDtW3btv6J0vLgzZs3qw8fPli6qk8BCIj8C1CCdQmDCBOrnmM4rh/n/gnHxEXDx29x0axYsaLat2/f/8bCqmcDYS4sQTaicD7+xjyxjSaXLFZsS+3XFfk/efKkevr0qUlMSJ8TX11z7xr6D0+eIn8TvMV0EvkXo4r4QiBM/PtYV1hyzt8OsbvGR7ls2bKeq2bNmjXTBqU/R/8mFxBkfvTo0d48rjH+o0ePqjdv3kx7lr64BKampqa5BSwuhhyyxBEtvwd6jLn3QinQCwTut4sXL5p887h50Kff0CfuQ947361DvIl3DVfk6tWrq9u3b8vyL/+V6q9Q5D9GysLSxnK3+u/5IPfs2TONPG7dulW9f/9+oNSQOe4e17Dk2TCaTgwQwMGDB6fNE7MCc8gyRqrtdKmhDj9+/FjduHEjOgc6OXz48DQ9Pnz4sHrx4kX0WRcT8g2R6EPqMFIERP4jhX/mJ9++fXu1cePG/kQEZu/fvz9w4t27d1dr167t/x1XAS6DWAvngTAgji5bqixdzj1OY7ERkxTg2r1796rXr19HRTh06FDPknfNSvzRgdWhSARE/kWqpbtFQQKQgWsxKzAkAKx+jv2xRoB4//79/W6cLjhldNlSZely7nEZC1fMsWPH+sslTnP+/PloFhauG+I81vdkXPDQOgcjIPKf5W9HSAYxf3wYiL1w4YIpfY87B8QKXEvNLrGoIVUWy5izrc/WrVurLVu29MXC4sfyj7W9e/f2/PauEbRHh2qzFwGR/+zVbU+y0FomH5vA3KCG9Y4V79qlS5d6l3liDX8xG4drsXli49X9PVWWlDnIcDpw4ED/EQKbV65c6V1kizVk58TkX7S7evWqCbfY2Kl/x+pnk0whcfz1J06c6Pv60Td6V5vdCIj8Z7d+q9BPTtYOl3EGtdByJG//7du3UZTIStm5c2e/X0pqYXTwfzukymId1/ULZbe4riB8gqScfFzjTgWZUblbuIFZSRyLH8vftZmI1+TGQvPFERD5xzEa2x6kehLAdamCZO5g0TVZs6R4Yj26Z2IxAsChL5YvJQBcs54YrOC2kcU6tuuHHFj/frD08ePH1bNnzwYORWYU2TWuxQLqqWtK6R+uxboBh5ue27zAg1gA8nG64cIfmWacinAfsjlaDIMUGdQ3HwIi/3xYz/hMfKx8oJAwH6zvw2VyqxUf5npzUuDEUNeYc8eOHb17Ba419beC0JUs1vlcP/DDfeVSFyE7/N91Qe8wpZKLbQTIrSUuUtfW1J8TyMmTJ6ddurPm9hPoheRdw92FDBgOfvZP3fzI/ODBA8UHulRmprFE/pmAnolpyOEPL3LVzYPFT3pnipUWWoN85AQPuSjGeJAjmwyk7/uY8fWzyVjvIrj1zqQsqdiHmS/ULoIQkds13Dy4e5yfH7LEz2+5QZ26Hkv/trn9jI0c/qmNzY4Noamej78mdE1QeRSuLgs26lOPgMh/jN+MGGHi3sEK53amT1xWkbH6OAUQAB5UNsKNhSuAOwHM1abNtCypawpLHPgBbLDAzeXXWWJzxeUzqoa7Cp+/a9bcfvqHQWJiBW5D571BLtx/btNnHjZ9/51oOiGNChPN24yAyH+M35AYYSIaViuETBAv1R2B75sLYljCTeQP8eNfxvJLnSPF8h9GllQ143bifkTdpSfcXBQ+cw258ZOPqhGnOX78eH96a26/ewB3UV3VVlxd3NWoixExJ5lhfqCbU8/ly5dHBYPmTURA5J8IWEndISa/Bg8EzX/z/7HW/ZowfJh8yJa0TcaB4PxApkVuSIJboW2O/zMli2Xdg/qAJf5/5/7AuiX46+fRgyfunjYnq2HW5j/LenDTuWbN7Xf9T5069T8XDxs6RN4kF/hwt8M3DEgj5pSkVj4CIv/yddRqhQQuIXA/6IvlDFE1ZfuwYeDv9XP9IT2O/sQMwqqelIJgk/A3mliGTKpAbWVJnaeuf5gG6fcBFwK8lhLWXaxl0Bih24Y6PrhprI1Tg29E8BxBXIsLL4wN8Y4Q81ErHwGRf/k6GmqFYa2eWCpimOnDRkGRtiaCwz0UBghjhd3aCJUqS5s56p4J3TyuTwm1b8LcfjZ4snxSGta7775hU6MkhOU0E9665sTArXC18hEQ+Zevo6FWiMsCy9BPXeTjrLP+Ob5jBfr+XyuJhxYyJwQyZLpsKbJ0PS83YH33xkyUr2iz5jC331qIz58rrOeUqrswZnDu3DnTxtFGXj3THQIi/+6wLHakkCAG+WXD4mxY+7iJrC20ICH/2I+6WMd2/ayypI7b1L/O8ieoisuna/lS1l2X29/mcl14oqJuP5u+tYX1oNqswTqX+nWHgMi/OyyLHSl05Qwq8cCvN/k/ApJ6WSskyZR0Qyt4Vlms48X6cY+CrKq6NspLXawnzO1vexoJMbWUtfDxCO8JECge1X2HmD719/8QEPlPwNsQftyDArJh8C5WByiEbtjnLaqwymIZK9YHfzbE5mf7EEj1g+GxGEpsjmH+Pkxuvz9v6LJL3UTCgLO1EuwwsuvZ4REQ+Q+PYfEjhBb5oAtJoeWf6j8OL0bNxMUnqyzDKmVQnj9kHxZys5bNGHZN/vN1uf2QriVIG66DzQ2/vcvYIh5EwNfScD2RKuqeJVh89uzZ5BvelrnUp1sERP7d4lnkaNZUQNI28f+6lnr8D39BaiZyvq2yDKuIphu+lEIgSOoXzMtdwnnY3P4Qn7C+j/VHfIY9NQyrJz3fHgGRf3vsxuJJbqJiLbuGZYhVV1d7J7Qm6UPwjvTBWAvr+dOfeSz18GNju7+nyGIds66fpbYPN58pMe0at2GpiZNa06jtOrveBMON33prOdzwu77j0RYfPRdHQOQfx6iIHlNTU73Kkim3J6m/AvH7F7BiQdwweIf/l8yPprINuA0gAb/WTZPfOJcsbRRXV9WTS1N1v2oV/vpVDNs266l7JvxRmza5/XXjhlk7sd8lCOMvGBbcMWjjeuoKG41jR0Dkb8dqpD3dsZwPnVuUBB5JxeRSjd8IUrrCW2E5XsuV/dDqZWyyWrDocAP5zdV7x0XiV/akT9Mt01yytFFYGERtsmTZ9CBM/3YsJTRCnNqso+kZfjTHL6GdGpsZNHaY6uvKWbCp+YTOPRCC+359I8ZMTRDoGheNl4aAyD8Nr5H1Dn2y/kLch0nwzbfy/T64XyBkS156+ItZbhzm4XlOARAfln5dwbcYGeWUJUVhYbaSJd8dK5wNww+Wcr8h3JRT1tHUF7y5cOaXW+4yrz4M+rMWNgH0zjsE8aP38D1TWYeuNJxvHJF/PqyHmqmJMGMDc0og88ZS1M2NBRFyrB+0mdTNCUlQ3bPpl694LrcsMXz4e91v+BLEtZB4GHy1/PqZZU11fbrK7W+aH72jf6vuqQFEqYtc8Y622Om56QiI/MfkjcAXTWYFbhmszdgPbWCdY7mSmtjWDUFWC4FNLjo1lXRmLgKElI22nCxGIUuTmrFmcd+wLtesZS1c/9BdZP0JxdTXL5xnJtJpWRO6Z1PjfRu0CbDJIWddPCRVLvXPj4DIPz/mncxIIS7+QVhuI8Atwz9uV0LCXVlifPyQAfNBlGwEbi7mGXaunLJ0Av4EDYK+Xblt3jP0zmkIwu8yk2uCIC1GVJF/MarQQoSAEBAC+RAQ+efDWjMJASEgBIpBQORfjCq0ECEgBIRAPgRE/vmw1kxCQAgIgWIQEPkXowotRAgIASGQDwGRfz6sNZMQEAJCoBgERP7FqEILEQJCQAjkQ0Dknw9rzSQEhIAQKAYBkX8xqtBChIAQEAL5EBD558NaMwkBISAEikFA5F+MKrQQISAEhEA+BET++bDWTEJACAiBYhAQ+RejCi1ECAgBIZAPAZF/Pqw1kxAQAkKgGARE/sWoQgsRAkJACORDQOSfD2vNJASEgBAoBgGRfzGq0EKEgBAQAvkQEPnnw1ozCQEhIASKQUDkX4wqtBAhIASEQD4ERP75sNZMQkAICIFiEBD5F6MKLUQICAEhkA8BkX8+rDWTEBACQqAYBET+xahCCxECQkAI5ENA5J8Pa80kBISAECgGAZF/MarQQoSAEBAC+RAQ+efDWjMJASEgBIpBQORfjCq0ECEgBIRAPgT+AflMhSkhwfftAAAAAElFTkSuQmCC"/>
                </div>
                <div className="logo-width logo-timestamp">
                    {timeService.getDateTimeString()}
                </div>
            </div>
        </div>
    );
}

