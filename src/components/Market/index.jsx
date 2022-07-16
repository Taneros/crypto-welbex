import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { FiArrowDownRight, FiArrowUpRight, FiLifeBuoy } from 'react-icons/fi'
import { tableData as data } from '../../api/tableData'
import { Pagination } from '../Pagination'
import { SelectRowFilter } from '../SelectRowFilter'
import { SelectValueFilter } from '../SelectValueFilter'
import { Search } from '../Search'
import useDebounce from '../../utils/useDebounce'

const URL = '/coins/markets?vs_currency=usd'

export const Market = () => {
  const [tableData, setTableData] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [listOfPages, setListOfPages] = useState([])

  const [sortByRow, setSortByRow] = useState(0)
  const [sortByRowValue, setSortByRowValue] = useState(0)
  const [searchTable, setSearchTable] = useState('')

  useEffect(() => {
    if (data?.length) {
      for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        setListOfPages((prev) => [...prev, i])
      }
    }
  }, [data?.length])

  const getTableData = async () => {
    try {
      const res = await axios.get(URL)
      console.log(`res`, res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // getTableData()
    setTableData([...data])
  }, [])

  // Search Table
  const debouncedSearch = useDebounce(searchTable, 500)

  useEffect(() => {
    if (debouncedSearch) {
      console.log(`search`, debouncedSearch)
      const reg = new RegExp(`${debouncedSearch}`, 'g')
      setTableData((prev) => {
        const searchedData = prev.filter((item) =>
          reg.test(item.name.toLowerCase())
        )
        if (searchedData.length > 0) return searchedData
        console.log(`not found`)
        return [...data]
      })
    } else setTableData([...data])
  }, [debouncedSearch])

  //  Pagination Setup
  const indexOfLastItem = currentPage * itemsPerPage

  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const currentPageItems = tableData.slice(indexOfFirstItem, indexOfLastItem)

  let filteredTable = currentPageItems

  // Sorting by Rows + Value Asc / Desc

  switch (sortByRow) {
    case 1:
      filteredTable = currentPageItems.slice().sort((a, b) => {
        if (sortByRowValue === 0) return a.current_price - b.current_price
        return b.current_price - a.current_price
      })
      break

    case 2:
      filteredTable = currentPageItems.slice().sort((a, b) => {
        if (sortByRowValue === 0) return a.market_cap - b.market_cap
        return b.market_cap - a.market_cap
      })
      break

    default:
      break
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex justify-between	">
          <h2 className="text-2xl font-semibold leading-tight">
            Таблица криптовалют
          </h2>
          <SelectRowFilter sort={{ sortByRow, setSortByRow }} />
          <SelectValueFilter sort={{ sortByRowValue, setSortByRowValue }} />
          <Search search={{ searchTable, setSearchTable }} />
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Криптовалюта
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Цена
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Рыночная капитализация
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Общий объем торгов
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Изменение цены 24ч
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Изменение % 24ч
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Движение цены
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTable.map((c) => (
                  <tr className="text-base" key={c.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            src={c.image}
                            alt={c.name}
                            className="w-full h-full rounded-full"
                          />
                        </div>
                        <div className="ml-3 flex flex-1 justify-start items-center">
                          <p className="text-gray-900 white-space-no-wrap text-base">
                            {c.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 white-space-no-wrap text-base">
                        ${c.current_price.toLocaleString()}
                      </p>
                      <p className="text-gray-900 white-space-no-wrap text-base ">
                        USD
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 white-space-no-wrap text-base">
                        {c.market_cap.toLocaleString()}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 white-space-no-wrap text-base">
                        {c.total_volume.toLocaleString()}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 white-space-no-wrap text-base">
                        {c.price_change_24h.toFixed(2)}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 white-space-no-wrap text-base">
                        {c.price_change_percentage_24h.toFixed(2)}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1">
                        {Number(c.price_change_percentage_24h) > 0 ? (
                          <>
                            <span
                              aria-hidden
                              className={
                                'absolute inset-0 bg-green-200 opacity-50 rounded-full'
                              }
                            ></span>
                            <div className="relative change green">
                              <FiArrowUpRight className="icon" />
                            </div>
                          </>
                        ) : (
                          <>
                            <span
                              aria-hidden
                              className={
                                'absolute inset-0 bg-red-200 opacity-50 rounded-full'
                              }
                            ></span>
                            <div className="relative change red">
                              <FiArrowDownRight className="icon" />
                            </div>
                          </>
                        )}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination pages={{ listOfPages, setCurrentPage, currentPage }} />
    </div>
  )
}
