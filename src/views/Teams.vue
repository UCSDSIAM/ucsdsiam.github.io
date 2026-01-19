<template>
  <section class="page">
    <h1>Executive Board</h1>
    
    <section class="section section--first leadership-team">
      <h2>Meet the SIAM Student Chapter Executive Board</h2>
      <p>Want to get involved in leadership? Please feel free to reach out to any executive member for more information!</p>
      <div class="card-grid card-grid--lg-gap">
        <MemberCard
          v-for="member in LEADERSHIP"
          :key="member.fullName"
          :fullName="member.fullName"
          :src="member.src"
          :role="member.role"
          :link="member.link"
        />
      </div>
    </section>

    <section class="section section--first">
      <h2>Rules and Duties of Officers</h2>
      <p>
        The Chapter shall have a President, a Vice President, a Secretary and a Treasurer.
        The roles of Secretary and Treasurer may be combined into a single office at the discretion of the Chapter, and additional officer positions may be established as deemed necessary for the effective conduct of Chapter affairs.
        Officers shall be chosen from Student Members of the Chapter and must be Student Members in good standing with SIAM.
        Officer terms shall not exceed two years.
        Re-election is permitted.
      </p>
      <br />
      <h3>President</h3>
      <p>
        The President serves as the chief executive officer of the Chapter and presides over all meetings of the Chapter and the Chapter Executive Committee.
        In the absence of the President, these responsibilities are assumed by the Vice President.
        If both officers are unavailable, the Secretary shall assume the presiding duties.
        The President acts as the official representative and spokesperson of the Chapter, articulating and representing its policies, positions, and interests in interactions with the university, SIAM, and the broader community.
        The President is responsible for appointing all committees and committee chairs, and for attending required board or organizational meetings or designating an appropriate representative when necessary.
      </p>
      <br />
      <h3>Vice President</h3>
      <p>
        The Vice President supports the President in the leadership and administration of the Chapter and presides over meetings in the absence of the President.
        The Vice President carries out responsibilities and assignments delegated by the President in accordance with the Chapter bylaws.
        In the event that the office of President becomes vacant, the Vice President shall assume the duties of the President on an interim basis until the position is formally filled.
        The Vice President also assists in overseeing the activities of the Chapter officers to ensure that assigned responsibilities are fulfilled in a timely and effective manner.
      </p>
      <br />
      <h3>Secretary</h3>
      <p>
        The Secretary shall keep a record of the affairs of the Chapter, handle correspondence, and submit an annual report of Chapter activities to the Secretary of SIAM, which report shall be suitable for publication in SIAM News or its equivalent.
      </p>
      <br />
      <h3>Treasurer</h3>
      <p>
        The Treasurer shall receive and take custody of Chapter funds, and shall submit an annual Treasurer's Report and other financial reports, as requested, to the Treasurer of SIAM.
        The annual Treasurer's Report shall be prepared as of the end of the academic year and shall be transmitted to the Treasurer of SIAM by no later than 30 days following the end of the academic year.
      </p>
    </section>

    <section class="section section--first">
      <h2>Committees</h2>
      <br />
      <h3>Executive Committee</h3>
      <p>
        The Chapter shall be managed by an Executive Committee, which shall be responsible for overseeing the Chapter's operations, decision-making, and strategic direction.
        The Executive Committee shall consist of the incumbent officers, including the President, Vice President, Secretary, and Treasurer, as well as the most recently retired President.
        The President shall serve as the chairperson of the Executive Committee.
        Vacancies shall be filled through nomination and majority vote of the Executive Committee.
      </p>
      <br />
      <h3>Other Committees</h3>
      <p>
        A Nominating Committee may be appointed by the President to oversee officer elections.
      </p>
    </section>
  </section>
</template>

<script setup>
import MemberCard from '@/components/MemberCard.vue'
import { LEADERSHIP } from '@/data/teams'
</script>
