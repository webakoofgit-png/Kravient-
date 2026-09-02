export default function ProductMockup() {
  return (
    <div className="product-mockup" aria-label="Preview of the Kravient HMS dashboard">
      <div className="mockup-topbar">
        <div className="mockup-dots" aria-hidden="true"><span /><span /><span /></div>
        <span className="mockup-address">app.kravient.in / dashboard</span>
        <span className="mockup-sync">Synced just now</span>
      </div>
      <div className="mockup-body">
        <aside className="mockup-sidebar">
          <div className="mockup-brand"><span>K</span><strong>kravient</strong></div>
          <div className="mockup-nav mockup-nav--active"><i>▦</i> Overview</div>
          <div className="mockup-nav"><i>＋</i> OPD desk</div>
          <div className="mockup-nav"><i>▤</i> Patients</div>
          <div className="mockup-nav"><i>◫</i> Pharmacy</div>
          <div className="mockup-nav"><i>₹</i> Billing</div>
          <div className="mockup-sidebar-footer"><span className="mockup-avatar">DR</span><span>Dr. Rohan</span></div>
        </aside>
        <div className="mockup-content">
          <div className="mockup-heading-row">
            <div><span className="mockup-kicker">Tuesday, 12 March 2024</span><h4>Good morning, Dr. Rohan</h4></div>
            <button type="button" className="mockup-add">+ New patient</button>
          </div>
          <div className="mockup-metrics">
            <div><span>Today's patients</span><strong>48</strong><small>↑ 12% this week</small></div>
            <div><span>Pending billing</span><strong>Rs. 18.4k</strong><small className="mockup-warn">9 invoices open</small></div>
            <div><span>Available beds</span><strong>12 <em>/ 24</em></strong><small>50% occupancy</small></div>
          </div>
          <div className="mockup-panels">
            <div className="mockup-panel mockup-panel--queue"><div className="mockup-panel-title"><strong>OPD queue</strong><span>View all →</span></div><div className="mockup-patient"><b>01</b><span><strong>Meena Kumari</strong><small>General medicine</small></span><em>Waiting</em></div><div className="mockup-patient"><b>02</b><span><strong>Arjun Patel</strong><small>Follow-up visit</small></span><em className="is-green">In room</em></div><div className="mockup-patient"><b>03</b><span><strong>Saira Begum</strong><small>Paediatrics</small></span><em>Waiting</em></div></div>
            <div className="mockup-panel mockup-panel--chart"><div className="mockup-panel-title"><strong>Patient visits</strong><span>This week⌄</span></div><div className="mockup-chart"><span className="chart-line" /><i /><i /><i /><i /><i /><i /><i /></div><div className="mockup-chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
