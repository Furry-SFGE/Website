import { useEffect, useState } from "react"
import CountUp from 'react-countup';

function App() {
  const [data, setData] = useState({
    title: {
      date: "获取中...",
      watch: 0,
      join: 0,
      count: 0,
      platform: "获取中..."
    },
    admin: {
      group: [
        {
          name: "获取中...",
          des: "获取中..."
        }
      ],
      member: [
        [
          {
            img: "logo-bur.png",
            name: "获取中...",
            des: "获取中..."
          }
        ]
      ]
    },
    schedule: [
      {
        name: "获取中...",
        des: "获取中...",
        item: [
          {
            name: "获取中...",
            des: "获取中...",
            time: "获取中..."
          }
        ]
      }
    ],
    sponsors: {
      cop: [],
      spo: []
    }
  });
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTab2, setSelectedTab2] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });

  return (
    <>
      <div className="flex w-full flex-col min-h-full">
        <header className="relative z-50 flex-none lg:pt-5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
            <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
              <img src="icon-text.png" alt="Logo" className="h-28" />
            </div>
            <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto border-b border-amber-600/10 py-4 font-mono text-sm whitespace-nowrap text-amber-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
              <div className="mx-auto flex items-center gap-4 px-4">
                <p>
                  {data.title.date}
                </p>
                <svg aria-hidden="true" viewBox="0 0 6 6" className="h-1.5 w-1.5 overflow-visible fill-current stroke-current">
                  <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round"></path>
                </svg>
                <p>兽跃庆典管理层</p>
              </div>
            </div>
            <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
              <a className="inline-flex justify-center rounded-2xl bg-amber-600 p-4 text-base font-semibold text-white hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 active:text-white/70" href="mailto:submit@syfest.com">
                提交您的作品
              </a>
            </div>
          </div>
        </header>
        <main className="flex-auto">
          <div className="relative py-10 sm:pt-36 sm:pb-24">
            <div className="absolute inset-0 overflow-hidden bg-amber-50 -top-36 -bottom-14">
              <img alt="" width="918" height="1495" className="absolute top-0 left-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-108%] sm:translate-y-[-6%] lg:translate-x-[-116%] xl:translate-x-[-122%]" src="logo-bur.png" />
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
                <h1 className="font-display text-5xl font-bold tracking-tighter sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
                  一个为Furry爱好者们提供展示平台的年度盛会
                </h1>
                <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-amber-900">
                  <p>兽跃盛典（SYFest，亦称 SYF）是一个由兽跃盛典管理层筹办的非盈利性专为 Furry 亚文化举办的年度盛会</p>
                  <p>所有 Furry 爱好者们都可以在这里提交自己的作品，我们将会在 Bilbili 等官方授权平台进行直播</p>
                </div>
                <a className="inline-flex justify-center rounded-2xl bg-amber-600 p-4 text-base font-semibold text-white hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 active:text-white/70 mt-10 w-full sm:hidden" href="#">
                  提交你的作品
                </a>
                <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
                  <div>
                    <dt className="text-sm text-amber-600">总收看人数</dt>
                    <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-amber-900">
                      <CountUp end={data.title.watch < 0 ? 0 : data.title.watch} duration={2} scrollSpyOnce />
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-amber-600">总参加人数</dt>
                    <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-amber-900">
                      <CountUp end={data.title.join < 0 ? 0 : data.title.join} duration={2} scrollSpyOnce />
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-amber-600">筹办次数</dt>
                    <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-amber-900">
                      <CountUp end={data.title.count < 0 ? 0 : data.title.count} duration={2} scrollSpyOnce />
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-amber-600">直播平台</dt>
                    <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-amber-900">{data.title.platform}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <section id="admin" aria-labelledby="admins-title" className="py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 id="admins-title" className="font-display text-4xl font-medium tracking-tighter text-amber-600 sm:text-5xl">管理层</h2>
                <p className="mt-4 font-display text-2xl tracking-tight text-amber-900">由他们组成并筹办了兽跃庆典，是兽跃庆典的主要筹办与组织者</p>
                <p className="mt-4 font-display text-sm tracking-tight text-slate-500">官网刚刚建立，部分管理层信息并未录入，并不代表实际组员！</p>
              </div>
              <div className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
                <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
                  <div className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
                    {
                      data.admin.group.map((group: any, index: number) => {
                        return (
                          <div key={index} className="relative lg:pl-8">
                            <svg aria-hidden="true" viewBox="0 0 6 6" className={"absolute top-2 left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block " + (selectedTab == index ? "stroke-amber-600 fill-amber-600" : "stroke-slate-400 fill-transparent")}><path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round"></path></svg>
                            <div className="relative">
                              <div className={"text-sm " + (selectedTab == index ? "text-amber-600" : "text-slate-500")}>
                                <button onClick={() => setSelectedTab(index)}>
                                  <span className="absolute inset-0"></span>
                                  {group.des}
                                </button>
                              </div>
                              <p className="mt-1.5 block text-2xl font-semibold tracking-tight text-amber-900">{group.name}</p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="lg:col-span-3">
                  {
                    data.admin.member.map((group: any, index: number) => {
                      return (
                        <div key={index} className="grid grid-cols-1 gap-x-8 gap-y-10 data-selected:not-data-focus:outline-hidden sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3" style={{ display: selectedTab != index ? "none" : "grid" }}>
                          {
                            group.map((member: any, index2: number) => {
                              return (
                                <div key={index2}>
                                  <div className="group relative h-72 transform overflow-hidden rounded-3xl border-amber-300 border-2 drop-shadow-lg">
                                    <div className="absolute inset-0">
                                      <img className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110" src={member.img} />
                                    </div>
                                  </div>
                                  <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">{member.name}</h3>
                                  <p className="mt-1 text-base tracking-tight text-slate-500">{member.des}</p>
                                </div>
                              );
                            })
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </section>
          <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
                <h2 className="font-display text-4xl font-medium tracking-tighter text-amber-600 sm:text-5xl">节目演出单</h2>
                <p className="mt-4 font-display text-2xl tracking-tight text-amber-900">将展示本届的所有参演节目，并包含具体的时间与参演人员</p>
              </div>
            </div>
            <div className="relative mt-14 sm:mt-24">
              <div className="absolute inset-0 overflow-hidden bg-amber-50 -top-36 -bottom-14">
                <img alt="" width="918" height="1495" className="absolute top-0 left-full -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]" src="logo-bur.png" />
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden">
                  <div className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pr-8 sm:pb-0 sm:pl-0" aria-orientation="vertical">
                    {
                      data.schedule.map((schedule: any, index: number) => {
                        return (
                          <div className={"relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0 " + (selectedTab2 != index ? "opacity-70" : "")}>
                            <button onClick={() => setSelectedTab2(index)}>
                              <h3 className="text-2xl font-semibold tracking-tight text-amber-900">{schedule.name}</h3>
                              <p className="mt-1.5 text-base tracking-tight text-amber-900">{schedule.des}</p>
                            </button>
                          </div>
                        );
                      })
                    }
                  </div>
                  <div>
                    <ol role="list" className="space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-amber-900/5 backdrop-blur-sm">
                      {
                        data.schedule[selectedTab2].item.map((item: any, index: number) => {
                          return (
                            <li aria-label={item.name}>
                              {index > 0 ? (<div className="mx-auto mb-8 h-px w-48 bg-amber-500/10"></div>) : null}
                              <h4 className="text-lg font-semibold tracking-tight text-amber-900">{item.name}</h4>
                              <p className="mt-1 tracking-tight text-amber-900">{item.des}</p>
                              <p className="mt-1 text-sm text-slate-500">{item.time}</p>
                            </li>
                          );
                        })
                      }
                    </ol>
                  </div>
                </div>
                <div className={"hidden lg:grid lg:gap-x-8 justify-items-center lg:grid-cols-" + data.schedule.length}>
                  {
                    data.schedule.map((schedule: any) => {
                      return (
                        <section>
                          <h3 className="text-2xl font-semibold tracking-tight text-amber-900">{schedule.name}</h3>
                          <p className="mt-1.5 text-base tracking-tight text-amber-900">{schedule.des}</p>
                          <ol role="list" className="mt-10 space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-amber-900/5 backdrop-blur-sm rounded-2xl">
                            {
                              schedule.item.length > 0 ?
                              (schedule.item.map((item: any, index: number) => {
                                return (
                                  <li aria-label={item.name}>
                                    {index > 0 ? (<div className="mx-auto mb-8 h-px w-48 bg-amber-500/10"></div>) : null}
                                    <h4 className="text-lg font-semibold tracking-tight text-amber-900">{item.name}</h4>
                                    <p className="mt-1 tracking-tight text-amber-900">{item.des}</p>
                                    <p className="mt-1 text-sm text-slate-500">{item.time}</p>
                                  </li>
                                );
                              }))
                              :
                              (<span className="text-xl text-slate-500">敬请期待...</span>)
                            }
                          </ol>
                        </section>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </section>
          <section id="sponsors" className="py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-amber-900 sm:text-5xl">
                再次感谢所有支持我们的合作方与赞助者们
              </h2>
              <p className="mt-4 text-center font-display text-xl tracking-tight text-amber-900/50">
                赞助者将仅展示本届的赞助前 20 名
              </p>
              <div className={"mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32 " + (data.sponsors.cop.length <= 0 ? "hidden" : "")}>
                {
                  data.sponsors.cop.map((sponsor: any, index: number) => {
                    return (
                      <div key={index} className="flex items-center justify-centerr">
                        <img src={sponsor} />
                      </div>
                    );
                  })
                }
              </div>
              <div className="mx-auto justify-center mt-10 max-w-max flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500/70">
                {
                  data.sponsors.spo.length > 0 ?
                  (data.sponsors.spo.map((sponsor: any, index: number) => {
                    return (
                      <p key={index} className="whitespace-nowrap">{sponsor}</p>
                    );
                  }))
                  :
                  (<p className="whitespace-nowrap">暂无数据</p>)
                }
              </div>
            </div>
          </section>
          <section id="newsletter" aria-label="Newsletter">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 drop-shadow-lg">
              <div className="relative -mx-4 overflow-hidden bg-amber-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-2xl md:px-16 xl:px-24 xl:py-36">
                <img alt="" width="918" height="1351" className="absolute top-0 left-1/2 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]" src="logo-bur.png" />
                <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
                  <div>
                    <p className="font-display text-4xl font-medium tracking-tighter text-amber-900 sm:text-5xl">加入我们？</p>
                    <p className="mt-4 text-lg tracking-tight text-amber-900">想要来帮助我们一起筹办一个专属于 Furry 的年度盛会吗？还是想要与我们共同合作？向下方邮箱发送邮件告诉我们吧 OvO</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold tracking-tight text-amber-900">官方群：1002462944</h3>
                    <h3 className="text-lg font-semibold tracking-tight text-amber-900">一群：2155022515</h3>
                    <h3 className="text-lg font-semibold tracking-tight text-amber-900">二群：1002092085</h3>
                    <h3 className="text-lg font-semibold tracking-tight text-amber-900">三群：1002794050</h3>
                    <h3 className="text-lg mt-3 font-semibold tracking-tight text-amber-900">向下方邮件发送您的加入/合作请求↓</h3>
                    <p className="text-slate-500 mt-2">contact@syfest.top</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex-none py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between md:flex-row">
            <img src="icon-text.png" alt="Logo" className="h-32 w-auto text-slate-900" />
            <p className="mt-6 text-base text-slate-500 md:mt-0">
              Copyright © 2025 SYFest. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
