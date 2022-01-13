import './index.css'

const TabItem = props => {
  const {tab, updateActiveTab, activeStatus} = props
  const {tabId, displayText} = tab
  const activeTabClassName = activeStatus === true ? 'active-tab' : ''
  const makeActiveTab = () => {
    updateActiveTab(tabId)
  }

  return (
    <li className={`${activeTabClassName} tab-item `}>
      <button className="tab-btn" type="button" onClick={makeActiveTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
