import React from 'react'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import Body from './Components/Body'
import './Government.css'

function Company() {
    return (
        <div className="government">
            <div className="gov-left">
                <Sidebar 
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAA81BMVEX///8REiQAq9kBXqwAAADa2tsAVKgAWqoAXKsAqdgAp9dKgr64yuIAWKkAptcAUagATaYAVajg7fXd5fH0+fwqa7JIerfD0uYAUaaL0erO3Ozi8/hjjsMAABcAABqVstVawuRvmck9dbYwbrPA5PM3t99ah7+v3+64z+UAABj1/PwASKSKqNDp6enX19iiu9rd8fei2e69vb+UlJpBQUwnKDZmZ28AAA9txuPO6/VTvuGDz+gWZbAAcLaqwt0lstzExMaurrEXGCmcnKCAgIYhfLsglcxvvN5nlsaAo84AP6CxsrQ0M0BZWWFKSlRxcXiGiJLsioi1AAAULUlEQVR4nO1dCWOiyLYmooAkgCBGXKJxN8S4tEtcGM3imxsnieb//5p3ThUoqEnb93WjmcfXk8hSmPqos9WpZRgmQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQL4Bl3XtXg8rsHnsavyu5CJTxfZoiUpFBxbqhbySe3Y1fo/Itm4tDhOkniBFVgbgiSpBl96mX5XcvpFFjjxNiFghnD4CQLPKaX8N+SWLkiGRDnwKmcokpUolUoJC/gYkkTp8apyPv1eOjctUlaCxMWk80UrqaHZQGhaetrIWjGOkuMNq/F9mm3KcjxlxVZb8b1F9PrCUlVSSlUL34PaRUIRaFsUkuZXBeN5aFcsqnKN0xfI+LmC7SAplxebyprtUbmTSk1SqU6tPHKxTRdUDiWSs6ZHqOuvoEF0R+Kqawls14azaFSWZTEqRqOiCL9C152Rc1vPCyo8IXCXpyyP8ZIhoBBmbVpmeThDRiEvokBUvO5k7EJ5FluNV0630VoSSqFSTNPTEbBySNG2wuaKOlfk6LhGpVJfGPigkT1RTcsqqFyc/eLLFYeVKMrirDIcpkDLhuNZCNuQ3BHlUIpSixc5lGBrvwk9LrSiiqpSpW+9NpNpu4ihyqTc9ljHTLkzBgmlzSam6AN5tP08d+F/xX+CuCVhxVrkZFSRoyh+cnRYy+wtbo4mMyyDzDvkSjqhojjmfavxYYijaZNYol3mkEhaVK7UvlSa0VAkwirPiI3UqyDKgtLwo7oHI41GXr0kPGrEPkTF8ehnTzHmJEQkUh4SWc2jdVQWf7iuv4I0xvBGFg/NoUha6wBaCD0l00Zr49kUzY9xOm2moZk3XvCwXcF6iqHywQ9nxnIoCvpYw5M6RmMno2e6BbXhqARlZiiGk196vozEREKMSYIJEowTcdWXUBmuYJ9kZmIo2vml59szkMWafZKENhOk9G+t4H+JAqi8dI5HNWypDJr5/cz228g2qiTyGl3j6TQGbsM6gRgEKyIV8agmy4QZxrypnXLJqqIoidZOjdtgRIkcjmRxjBfyhvOijgoNDD1vYWReBsu9YdYxR7Vae1MuG+Mx78FZGykzy7Wy3nb0awROQhzi9Rfw1NzRDcg5KFgMK4sVC1EZzKA1mGFP5dqJpaocSeiAlPFOPNiBoFEm8QnRrzY8FBKJ2UnAO5COHDa2DPvtZki9bN3KgDlA6xgSZ/q6GMvxEoZdRVomRaw8+jzbbpDXQUhq3KbYkaBBUM5f4hH6L3GtWShgoXFFhJgCT9EhCFZSi2c5MOZJvDRCXmMwoeLE9RAwQ8feAmbKUYWxAaECEZoJKthwfb0DQSDUcALMUBjTUEwlsnXOsxLxeBCgzDKMeQ3s1k+VIWiJzvCBSyjG+8pkG1WV5bOkStFoZXN5GKUNEQ2RFphyLF8lNyBo4onFm1Gpa8Mb2BjKDuocvJ6pJGx08UgA4eKq5gyDIlcH5XNinEMsJGLYBcY+5OqsXUObyWVkf9Q+ZxrfNdg79X8wjnWHhyiKwDMlRh1RFCSSrKmCjJEgBbo2FRMl0t3QjAlWJ/S3KggC8kr6xmQLRWK5gJn0F5GgDTKY20DjIbqMR5rRX9Aq1PESMR7XmAvxRCkg039LLOXV+udIrZZWaA8sCxrx18ybG+3IKJzQHaGXsaclGIriMvcTVEsoMfZ+6fBvSRCIHLZi6sufJ7EPIFYc/unRX9JuDFTDnI08dvTuXHUGkTinGVKyKIp2F3ODKScI/H8YakmVo4SM6EZJ8mUcAmZqduu2We50NiGVSRPEguoK3M1aZycjAsZFEGTUTx0CFfUovgzFy2KItoT+UsE2fl28XkRm+a/bYKoIAitTzWyorFD6bbX9BUBFyRsFHxsdo9XfbrMtJB1L/zmInf8PhsUgoBp0G7gjdMziEE3FwITrIukmotX/mtnFT4lNDYFX4ybGmGgq11GKvwBJIfWEaIGEQVlOUL+Uxp8Sg54dsYdoL2d4brBC4suBqD8CkESSHoXolwa/JAb54oGfEQNePIsmsw0yIILd0UApFd9lUbPjWqyFTK1fFdosq7nheWKXmO4uS+SQPuG8K5BF/zucGPShq4XgicgNAtpMirlw68k27RDTLHdheJa13wTGwhho5bkjdMsKEtXscdTVDcs6btiGZ8hrm5hu8Z7CVA4RGQzywZWlwaHE/CDjBkR/6J31kB3AU1RjygaG4MkQbhHTE+DVXaUVaSO5dj5OZ/1XMtPuYZJY9hPLFYcgwtVmXmJaQhI+TfmiXUQfDf1NzufkaRpMMcugioF3/qxQ3HIz8xDTLOkLw1CzlWwh2Z0c/3Bh6/UkSlNu+xGHSH39yt3EUA6/SGqQ7Afj6pb6h7xK32XFlZ3eA5TGmG0T3MQupS+HHnTokcsZ2kFN/K4qH4YX0Hx0z2g72l+UA2bKPmK8+uVgEXgy7JFrGIv423UB30ksHo7bOV2PzKi8w9EsfUJM2en3ux+HwJqkh6HFeH/nf0BAhfnBDAaK9JWOxtCxFENbSXs9cSCxcgU7pjM7TzAUaRzMC3bazjeUBOJh0NrTuIOOTOLAs0d0DiU2WT9OfEfKTqQmBJ97LlBfVrHdGMky1eyKwX8V01vwEGId2Zm9Q0dcOrYjKwqs4WuuCtNO2Bkr2w6HZu5DM5wF4BlCOoxYho7vztbjGjUgds1QVT4qMXzDqO2ZCibt3QUPIjYR6dhEGxOv+H0uYtxRiUEoTAeeM6GQx/4fRqziDGi04fvEzEYUfW8xc0vH0E/TUNj2QA4OI4bJAPo2ZjSmPpqOeayiSemQAMSseKL9A4nNnId02+GjVcQmtPy2iiTurm/82DBKRRKVIyS7DP5hxFCSqTVEh69v/JjE+u3Hzu0Ohd0lRF0TK+VRSnQMto3DiOHriI7LI5L2vmYIUyIBMUEQ/I08oANNkoqOEFWQoT1Vb+xyZIcR69DZV8SZEWWzdRZTiz7HihjdY97eebXEkTk+1uWiDyLWkTezaokbI6oGgpA0fE8GQy3Jn4T+GB3iy1RkHDoib93F7BBiJOygs2plOvMIrT56wyP0x+IQdwsm6es6PejydWVW6bQx+tgwO4BYCqVYrJWvZ7Nxhz7n9MtR4P2eC4dpxTR5t9GoRwtw2NbFDLottvZvEXOsOImetzqrYGSjaO0xKev3ZFpwZGgWkYbsncOnY5vZA5xmQwBdpMxcxPIWy9sz80eyM7vDBftLcSRJ8XtUE/MsaD2u3TM1KJCseI1HGktm1Crkra+J6QkyZfuWzB8ui5spLA5QDEI0ryhwf5rINi7QYOlUyUJb9/DaNYOBF6YOOXs0aE3sHN6JAdyImiGxytbzKdtf47jHT0bdfj90g2UNEJOMGPLEUAiHWMsA3Y9PWUHCASaHWF1huUL8whIknNKzj9jMHkeC8EZt+cDFC2fEYBzdmjGwIVaVVMyC1zmB1zfEChJOeUE5M/S9xHCIFL0YjgX7rmLERfPoybDrFPJGBw6xSzpvSuPJKLlDLCuRZoCeD9Z6D7Gh3SnDv3CEqWI40x5rZoqbWW82HGJZiYxb1NWtFiOSmVaF/S2Wccx/ifffiyFQA7DeE7vrsoFbxxZ7dEyQCunPdWxihx0QA7Cc/5JI595hS2TWEzAdOMT0Ei9IMVWgczs2VlEVJIUTqJzuEMs48wMh7KAzBv2GDrJIBmvJEgL3HYcYo1kcLwALMslo48dKBl6NkaS+k1xYY2jrrM4Lvg+12MBXiuaDjBm7U1M4WEKXFJj5kmQVdiKPFsRKdPGcWQmFPNPEMP4leS6cRsL5P7SOQCUgo0T4kkVXBqdMOmfbiyX2Da6bZGKqu2eK3gMH3DBddBTTgchKtO9iIhF37SYkYN9itoeYWcHGdlse7JoRGwu2XuCOtWwzDXGR0bKr47EfmCgMbTHbJUbay2NRyYRnlEwdvlo93rokbDIVnfM4uhVYpXalcYcYaa+oJ9dPVsa07W9mj7fOFqcdqTj+R4YgPfEH8UYeZtvEbDl0PzR0LEcaZ70fc7nVAhc1oDsiuuEZjN5ps21iO3JI5zoTEwlBhyD8wXr/FCYr2Cts0JnJ1+5728y8xGh7eeSQeAkyBQHfF3V+R0MdUwQYMJGKyp4wf+Jl5iG2azeIkwiJqKhJ50uPCZyMQ5xZhi62dN9Leay+m9iunWfKUSf41cl+JsdeoU8maJMeMnY5t6VRdFkQFzHaXrtySAyHWQSLeGRBROCkZIGssxqFvDlFxqtnG2LUzs+2C9ozRnChHXcKS2vJQrYEvv0RWVw02/FnVBrXxHbtPF2KS4dCG8dfiuSgoOKaP6wnTXR7xmo3beYQs+XQ1V6jmegkt5m8ciIrGRE4qV46x8roFTIKPXZFxCkn9neIkUl7Lv2yl0LT5DbyOpG1pwwmCnmwz6TNzCEx2qHJpkGG0V1iriClTLZbEOkK77wBpih2tDUtO8A5X6xUIha6I5IRl9A6Jp6IO8TWc1KZ0ZgsdLfXPC5wYaBxSjtEaCVkRheWtunWEECNttoXxMpjTHDDPyKGehYzxCe28wVpM16i6c2OaG9oMUQD+RmxTKdCdzKRr8lsLK2EG4LEju/AvNDPyYKjF6I8+tDeq0OeTUaTXR2LztrASrQ3x6DuYYobFvD8qdgNFwq4AYJqUc1vD+nmOLhXzh6rGJKjZEkt0KLeW8+iekmlU9xbhmkhM0EpUIvXnkTXI7C7xOhleWyHW1MWxVA5PxH/tY20hdWTBHsgwaxV7F1/5F1iKKYpe6Zjukh2fTruAuEvYWaxhoKRcPKBmdr1TJajW8SishiqpJzIK46r9cEaJk5QvTaoW2TtvVFaby9otmuTiodYZZgarRfEpatkAzzeWJyoGDrQF7gQE3oy7GLLEOxJv+mtIkdKK8WTtBpeaFlSWVaKlfJxV6i7swRkWlVU2lqlU3NenyBdVcj2goKqlArTuC1jbmJasnGpGphiA5tROpGdZA5BvBAjqgM2UpWs4kv+Iplu4Uo6LXnRWpwnBHtzU0GKFb9JazkwW5d0x0vcxFRSOU6hW/IZnCrxdMdWQTKsbUX8Fojnz0HcvGup1pC4WGnx9Y6Zpwy9vijFFLARvEB308V9dCXVuLWyLe3E7fvPEa/nC+elhEVQKmYb0/S35+SGqev6txW9AAECBAiwC13LbDkqPWNfyWS8flnT7fN1iRNC3rIS4H71An78xeiXqqSqVZ1JWFkmzrJ5Ri9BKIwjeXEL7uDE1BcLJ3EyaRZu4EQyLQHXpQI80mCYrHXsQT8bjVtcFXyrZyVBifGY0zk/x/XPvHTOxA0jzzQMoVjiY0lM8leLwm2ayapk3KEowTl/G2deOPb8Eg4anMXo1qnsiBm/eJHU1pTJSnw6nWYaEqebfKzBCFKViXNcHqde4pZIF0DkEg64qUOsBCXqHFdnqlKJ0W5j9bgS06DksUcz18hLMZ1MT8SThmTo+mJRdxOT3MSMCw8xwyG2WKSZknHR4I6/a6QDIKa5idFUDRLTDiZGw0hgdXlC26g7xITL4sJFTLCq54J6IDGt1crHcUqMcJzdqPbCIcYqsaqbmMCp7IEtVkzfcrcXOHXF/xnpn8MmxoPxiLuI8aVGQThUFLWFikvt8tIpjSNt65iuN2zjcbiOMVoMiV1wxgllhHeJ8UrjU6vIITGyL9OGmIrEDELM/42NPkdepcR4jDzAj9XrqFq8lxjwKfKldF7FFpNYiy2CQhXTDUlJAjErOeVw9vNpEWvE/tFwwxzOUAQmHVNjMVWJM0bskonf3uaZl5hipm/BNORj3G2M43RaNMEsyLmk45aDcEBm59/+c0LE4nX8n7Sk6wj4zDfyeahdvZ5k9It6HG/AwQVwn8IdMOrrouQc44y6fYPRLi5Ox9oHCBDgDyPS1JsR/VVvPjA/7u5+gPbDBxwwcIG5e8WPhybzencH9yNwmbm7i9wxTabZJOXhIt6E4nCkv94dm84GkWfm8S6CFb17bEa6QOw5Eok0X5nHV4ZpRpgfj8wzVJ9p/mCeH/QfeO3hDj5fX6EgfD7/0LtAHP49Ptw9R45NZwMdiEXunu8i8KsZeYZX/vgAxLr6I5J4RmKPD0w30kR2SCwSeXhg4CG8Dufw6xFaC4g9P9w9nlCLBQgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAX0DkXwom/C8Fc/YvRUDsu+FLYrmc58z++R6wifXgp/9Ej9/sz7Or9/erfs8p+bTMnfXf3/yt3n8PSiw3GOSuPq7ur85u7sMfT7mr+5vcVfgRsHoO34fDZ7lw+K0JPx+9n3zfycBusaeP+6f5vDsPz7urefet210tn5eRZTg8uHvvNpv9XrO5fOjBp88tlttz6NWP3BP85MjPDT2iN2xiV92nwWp1tVoNwuF5rnsWXq3e73vNyHzV7T+EB48PvXD/rpnzV8Vyy+Xq7Cn39NS76ufO3ue9Xq5/9fQ0hzv9mz5cf7paDVbv3UF32V3OP+67/Y9u72N14yaWG7x/QInBvAciefZ8fzWYL3P34Vxk3l2+ht9eH+7vgVjfZ9vRn89Xj+8fvcfBavC4/Fg+z1eDj97D+/38fb5adZ8/evO3QRgYPYefz7q9+Tuw6H94iJ3lHudPH7l+vwsGAt7CWfd9mXtedR96kX5z9bDqvs57D8vIvb/E7ruDj9Xyo/c8H8yfe4NuF84/eq+rfnf5gQ0BnIHNe+5xtVo99gaP71Bg3r3yElv1c/2PFf7cD8KDj/7bW+69O7+5AoLdwf09iOQqvPLbdPTPbnq5t34/B0J4trzvn/Xu4az/lutd9XJP/aflGWj9TX951btavoMx7/fve14doyp5A7+uUP1yhHXu6ob4MriEV3In68WIh92q3P/PyOM7IyD23fC/w0FZyLkZS0QAAAAASUVORK5CYII="
                        t1 = "Dashboard"
                        t2 = "Raise Funds"
                        t3 = "Get Debt"
                        t4 = "Portfolio"
                        t5 = "Commute"
                    />
            </div>
            <div className="gov-right">
                <Header text="Private Company Name" />
                <Body 
                    h1="Raise funds"
                    c11="Euity based"
                    c12="Service asset based"
                    c13="Get funds from LePo"
                    h2="POrtfolio"
                    c21="Weekly Progress"
                    c22="Monthly Progress and projections"
                    h3="Get Debt"
                    c31="Get debt from LePo"
                    c32="Contact the entrepreneur"
                    c33="Get debt from government"
                    h4="Contact Us"
                    c41="Fill the form"
                    c41="Live chat"
                    btn
                    invest={false}
                />
            </div>
        </div>
    )
}

export default Company
