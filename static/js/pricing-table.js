
(() => {
  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: { annual: 1250, monthly: Math.round(1250 * 1.2) },
      who: "Small providers, startups, and internal teams running limited workloads",
      value: "Reliable incident support, guided upgrades and basic enterprise features. Low risk at low cost"
    },
    {
      id: "standard",
      name: "Standard",
      price: { annual: 3000, monthly: Math.round(3000 * 1.2) },
      who: "Middle-size providers and data centers, growing teams with production SLAs who need faster responses and hands-on guidance",
      value: "Priority tickets, onboarding assistance, enterprise features and stable releases for daily ops"
    },
    {
      id: "plus",
      name: "Plus",
      price: { annual: 5500, monthly: Math.round(5500 * 1.2) },
      who: "Regulated and privacy-conscious organizations, SPs/DCs with mission-critical clusters",
      value: "24×7 support, full enterprise features package, hardened security practices and help with migration/audits"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: { annual: null, monthly: null },
      contactUrl: "https://aenix.io/contact/",
      who: "Large-scale platforms and partners needing roadmap influence and custom integrations",
      value: "Co-engineering on features, architectural reviews, and tailored SLAs across multi-DC and air-gapped setups"
    }
  ];

  const sections = [
    {
      title: "Information",
      items: [
        { k:"Who is it for", v:{basic:plans[0].who, standard:plans[1].who, plus:plans[2].who, enterprise:plans[3].who} },
        { k:"Value", v:{basic:plans[0].value, standard:plans[1].value, plus:plans[2].value, enterprise:plans[3].value} }
      ]
    },
    {
      title: "SLA-guaranteed Support",
      items: [
        { k:"Package Includes", v:{basic:"10 Physical Nodes", standard:"10 Physical Nodes", plus:"10 Physical Nodes", enterprise:"10 Physical Nodes"} },
        { k:"Incidents covered¹", v:{basic:"5", standard:"Unlimited", plus:"Unlimited", enterprise:"Unlimited"} },
        { k:"Service Desk Hours²", v:{basic:"Business Hours", standard:"Business Hours", plus:"24×7 Support", enterprise:"24×7 Support"} },
        { k:"Emergency Response Time³", v:{basic:"In 8 Hours", standard:"In 4 Hours", plus:"In 4 Hours", enterprise:"In 1 Hour"} },
        { k:"Standard Response Time", v:{basic:"In 2 Business Days", standard:"In 2 Business Days", plus:"In 8 Hours", enterprise:"In 4 Hours"} }
      ]
    },
    {
      title: "Enterprise features",
      items: [
        { k:"Billing System", v:{basic:"✔", standard:"✔", plus:"✔", enterprise:"✔"} },
        { k:"White-labeling", v:{basic:"✖", standard:"✔", plus:"✔", enterprise:"✔"} },
        { k:"Air-gap", v:{basic:"✖", standard:"✖", plus:"✔", enterprise:"✔"} },
        { k:"WHMCS Integration", v:{basic:"✔", standard:"✔", plus:"✔", enterprise:"✔"} },
        { k:"Backup System", v:{basic:"✔", standard:"✔", plus:"✔", enterprise:"✔"} },
        { k:"GPU sharing", v:{basic:"✖", standard:"✔", plus:"✔", enterprise:"✔"} }
      ]
    },
    {
      title: "PoC",
      items: [
        { k:"PoC Support Level", v:{basic:"Knowledge base and answering questions", standard:"Basic PoC", plus:"Full PoC Package", enterprise:"Full PoC Package"} }
      ]
    },
    {
      title: "Learning and trainings",
      items: [
        { k:"K8s Deep Dive Course", v:{basic:"As per pricing", standard:"As per pricing", plus:"1 full course/year free; additional at 30% off", enterprise:"1 full course/year free; additional at 30% off"} },
        { k:"Training", v:{basic:"1 hour/month", standard:"2 hour/month", plus:"3 hour/month", enterprise:"5 hour/month"} }
      ]
    },
    {
      title: "Security Features",
      items: [
        { k:"Fast-track security bug fixing", v:{basic:"✖", standard:"✔", plus:"✔", enterprise:"✔"} },
        { k:"CVE Vulnerabilities", v:{basic:"✔", standard:"✔", plus:"✔", enterprise:"✔"} },
        { k:"User Authentication Support", v:{basic:"✔", standard:"✔", plus:"✔", enterprise:"✔"} }
      ]
    },
    {
      title: "Consulting/Managed Assistance",
      items: [
        { k:"Migration", v:{basic:"Documentation only", standard:"Documentation only", plus:"Guided by Ænix", enterprise:"Managed by Ænix"} },
        { k:"Architecture Advisory", v:{basic:"Billed hourly", standard:"Billed hourly", plus:"✔", enterprise:"✔"} },
        { k:"Best-Practice Audit", v:{basic:"Billed hourly", standard:"Billed hourly", plus:"✔", enterprise:"✔"} },
        { k:"Platform Installation", v:{basic:"✖", standard:"✔", plus:"✔", enterprise:"✔"} },
        { k:"Certification and Compliance Support", v:{basic:"✖", standard:"✖", plus:"✔", enterprise:"✔"} },
        { k:"Supervised Upgrade Assistance", v:{basic:"✖", standard:"✔", plus:"✔", enterprise:"✔"} },
        { k:"Extra Consultation Rate", v:{basic:"$150 / hour", standard:"", plus:"", enterprise:""} }
      ]
    },
    {
      title: "Procurement",
      items: [
        { k:"MSA and SLA terms", v:{basic:"Standard, no amendments", standard:"Standard, no amendments", plus:"Standard, amendable", enterprise:"Customer templates permitted"} }
      ]
    },
    {
      title: "Ænix Team Engagement",
      items: [
        { k:"Dedicated support channel", v:{basic:"✔", standard:"✔", plus:"✔", enterprise:"✔"} },
        { k:"Remote Access (ssh)", v:{basic:"✖", standard:"✔", plus:"✔", enterprise:"✔"} },
        { k:"External Monitoring", v:{basic:"✖", standard:"✖", plus:"✔", enterprise:"✔"} },
        { k:"Personalized Roadmap", v:{basic:"✖", standard:"✖", plus:"✔", enterprise:"✔"} },
        { k:"Priority Engagement Time⁴", v:{basic:"2 Hours", standard:"4 Hours", plus:"15 Hours", enterprise:"40 Hours"} },
        { k:"Exclusive Update Channel", v:{basic:"✖", standard:"✖", plus:"✔", enterprise:"✔"} }
      ]
    }
  ];

  let mode = 'annual';
  const usd = new Intl.NumberFormat('en-US',{ style:'currency', currency:'USD', maximumFractionDigits:0 });
  const table = document.getElementById('cpPricingTable');
  const cards = document.getElementById('cpPricingCards');

  function asBoolIcon(val){
    if (val === true || val === "✔") return '<span class="cp-ok">✔</span>';
    if (val === false || val === "✖") return '<span class="cp-no">✖</span>';
    return val || '';
  }

  function planPriceHtml(p){
    if (p.price[mode] !== null) {
      return `<div class="cp-price">${usd.format(p.price[mode])}<span> / month</span></div>
              <div class="cp-billed">billed ${mode === 'annual' ? 'annually' : 'monthly'}</div>`;
    }
    return `<a href="${p.contactUrl}" target="_blank" rel="noopener" class="cp-request-btn">Request quote</a>`;
  }

  function renderTable(){
    let html = '<thead><tr><th></th>';
    for(const p of plans){
      html += `<th><div class="cp-plan">${p.name}</div>${planPriceHtml(p)}</th>`;
    }
    html += '</tr></thead><tbody>';

    for (const sec of sections){
      html += `<tr class="cp-section-row"><td colspan="${plans.length+1}">${sec.title}</td></tr>`;
      let alt = true;
      for (const it of sec.items){
        const altClass = alt ? ' class="cp-alt"' : '';
        html += `<tr${altClass}><td>${it.k}</td>`;

        const values = plans.map(p => it.v[p.id]);
        const nonEmpty = values.filter(v => v && String(v).trim() !== '');

        if (nonEmpty.length === 1) {
          html += `<td colspan="${plans.length}" style="text-align:center;font-weight:600;">${nonEmpty[0]}</td>`;
        } else {
          for (const p of plans){
            html += `<td>${asBoolIcon(it.v[p.id])}</td>`;
          }
        }

        html += `</tr>`;
        alt = !alt;
      }
    }

    html += '</tbody>';
    table.innerHTML = html;
  }

  function renderCards(){
    let html = '';
    for (const p of plans){
      html += `
        <div class="cp-card">
          <div class="cp-chead">
            <div class="cp-plan">${p.name}</div>
            ${planPriceHtml(p)}
          </div>`;
      for (const sec of sections){
        html += `<div class="cp-section">${sec.title}</div>`;
        const isLong = (sec.title === 'Information');
        for (const it of sec.items){
          html += `
            <div class="cp-row${isLong ? ' cp-long' : ''}">
              <div class="cp-k">${it.k}</div>
              <div class="cp-v">${asBoolIcon(it.v[p.id])}</div>
            </div>`;
        }
      }
      html += `</div>`;
    }
    cards.innerHTML = html;
  }

  function render(){ renderTable(); renderCards(); }

  document.getElementById('cpBillingToggle').addEventListener('click', e => {
    const btn = e.target.closest('.cp-tbtn'); if(!btn) return;
    mode = btn.dataset.mode;
    [...e.currentTarget.children].forEach(b => b.classList.toggle('cp-active', b===btn));
    render();
  });

  render();
})();
